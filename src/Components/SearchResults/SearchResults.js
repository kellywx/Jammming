import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../Tracklist/Tracklist";

function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
        {/* <!-- Add a TrackList component here --> */}
        <TrackList userSearchResults = {props.userSearchResults}/>
      </div>
        );
}

export default SearchResults;