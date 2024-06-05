import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      <Tracklist userSearchResults={props.playlistTracks} onRemove={props.onRemove} isRemoval={false} afterRemove = {props.afterRemove}/>
      <button className={styles['Playlist-save']}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;