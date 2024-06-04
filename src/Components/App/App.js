import React, {useState} from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";

function App () {

  const [searchResults, setSearchResults] = useState([
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
    }
  ]);
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles['App-playlist']}>
            {/* <!-- Add a SearchResults component here --> */}

            <SearchResults userSearchResults={searchResults} />
            {/* <!-- Add a Playlist component --> */}
          </div>
        </div>
      </div>
        );
}

export default App;