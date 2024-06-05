import React, {useState} from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
function App () {

  const [searchResults, setSearchResults] = useState([
    {
      name: "Name 1",
      artist: "Artist 1",
      album: "Album 1",
      id: 4,
    },
    {
      name: "Name 2",
      artist: "Artist 2",
      album: "Album 2",
      id: 5,
    },
    {
      name: "Name 3",
      artist: "Artist 3",
      album: "Album 3",
      id: 6,
    }
  ]);

  const [playlistName, setPlaylistName] = useState("Playlist Name");

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Name 1",
      artist: "Artist 1",
      album: "Album 1",
      id: 1,
    },
    {
      name: "Name 2",
      artist: "Artist 2",
      album: "Album 2",
      id: 2,
    },
    {
      name: "Name 3",
      artist: "Artist 3",
      album: "Album 3",
      id: 3,
    }
  ]);

  function addTrack(track) {
    // const existingTrack = playlistTracks.find(t => t.id === track.id);
    /* <!-- checks to see if track is already in playlist or not --> */
    const newTrack = playlistTracks.concat(track);
      setPlaylistTracks(newTrack);
      setSearchResults(searchResults.filter(t => t.id !== track.id ));
    

    // if (existingTrack) {
    //   console.log("Track already exists");
    // } else {
    //   setPlaylistTracks(newTrack);
    //   setSearchResults(searchResults.filter(t => t.id !== track.id ));
    // }
  }

  function removeTrack(track) {
    setPlaylistTracks(playlistTracks.filter(t => t.id !== track.id));
  }

  function addAfterRemove(track) {
    setSearchResults(searchResults.concat(track));
  }


  return (
   <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
      {/* <!-- Add a SearchBar component --> */}
          
        <div className={styles['App-playlist']}>
          {/* <!-- Add a SearchResults component here --> */}

          <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
          {/* <!-- Add a Playlist component --> */}
          <Playlist playlistName = {playlistName} playlistTracks = {playlistTracks} onRemove = {removeTrack} afterRemove = {addAfterRemove}/>
        </div>
      </div>
    </div>
        );
}

export default App;