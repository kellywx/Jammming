let accessToken = "";

const clientID = "37f7d0b2e37f44dba82fbb03b24c5781";
const redirectURL = "http://localhost:3000/";

const Spotify = {
    // getAccessToken will get user's access token so they can make requests to Spotify API
    getAccessToken() {
        if (accessToken) return accessToken;

        // extract access token from URL
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        // extract expiry time from URL
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        // if access token and expiration time are in URL...
        if (tokenInURL && expiryTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);

            // this sets access token to empty string when the time is expired (access token will expire)
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);


            // clearing url after access token expires so method does not try to get access token
            window.history.pushState("Access token", null, "/");

            return accessToken;
        }


        // if access token is not alr set and not in URL, redirect users to authenticate their Spotify account to get access token in the URL
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
        window.location = redirect;
    },

    search(term) {
        accessToken = Spotify.getAccessToken();

        // search returns a promise by returning a GET request
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((response) => response.json())  // convert response to JSON
            .then((jsonResponse) => {
                if (!jsonResponse) {
                    console.error("Response error"); // if JSON does not have any tracks, log error
                }
                return jsonResponse.tracks.items.map((t) => ({
                    id: t.id,
                    name: t.name,
                    artist: t.artists[0].name,
                    album: t.album.name,
                    uri: t.uri,

                }));
            });
    },

    savePlaylist(name, trackUris) {

        // check if there are values saved to these arguments, if not return nothing
        if (!name || !trackUris) return;
        const aToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${aToken}` };

        // get user's profile ID
        let userId;
        return fetch(`https://api.spotify.com/v1/me`, { headers: header })
          .then((response) => response.json())
          .then((jsonResponse) => {
            userId = jsonResponse.id;

            // using user ID, create a new playlist in their profile
            let playlistId;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
              headers: header,
              method: "post",
              body: JSON.stringify({ name: name }), // convert object to string using JSON.stringify
            })
              .then((response) => response.json())
              .then((jsonResponse) => {
                playlistId = jsonResponse.id;

                // add items (tracks) to playlist
                return fetch(
                  `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                  {
                    headers: header,
                    method: "post",
                    body: JSON.stringify({ uris: trackUris }),
                  }
                );
              });
          });
      },
    };

export { Spotify };