import React from "react";
import styles from "./Track.module.css"
function Track(props) {

  function renderAction() {
    if (props.isRemoval) {
      return (
        <button className={styles['Track-action']} onClick = {passTrack}>+</button>
      );
    } else {
      return (
        <button className={styles['Track-action']} onClick={passTrackToRemove}>-</button>
      )
    }
  }

  function passTrack() {
    props.onAdd(props.track);
    /* adds track to playlist */
  }

  function passTrackToRemove() {
    props.onRemove(props.track);
    props.afterRemove(props.track);
  }
  return (
    <div className={styles.Track}>
      <div className={styles['Track-information']}>
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      
      {renderAction()}
      {/* call renderAction method so that we can get the + - buttons in each track */}
    </div>
  );
};

export default Track;