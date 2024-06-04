import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
        {/* <!-- Add a Tracklist component here --> */}
        <Tracklist userSearchResults = {props.userSearchResults}/>
      </div>
        );
}

export default SearchResults;