import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist (props) {
    return (
        <div className={styles.Tracklist}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {props.userSearchResults.map(track => {
          return (
            <Track track={track} id={track.id} isRemoval = {props.isRemoval} onAdd={props.onAdd}/>
          )
        })}
      </div>
    );
}

export default Tracklist;