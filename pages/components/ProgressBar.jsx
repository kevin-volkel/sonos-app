import React, { useEffect, useState } from "react";
import { Input, Progress } from "semantic-ui-react";

const ProgressBar = ({
  songLength,
  songProgress,
  isPaused,
  setSongProgress,
  changeTimestamp,
}) => {
  const secondsToMinutes = (secs) => {
    let remainder = secs % 60;
    return `${Math.floor(secs / 60)}:${
      remainder < 10 ? `0${remainder}` : remainder
    }`;
  };

  const getSongPercent = () => {
    return (songProgress / songLength) * 100;
  }

  return (
    <>
      <div className="progress-bar-container">
        <div className="slider-container">
          <input
            className="slider"
            type="range"
            min="0"
            max={songLength}
            step="1"
            value={songProgress}
            onChange={(e) => setSongProgress(e.target.value)}
            onMouseUp={changeTimestamp}
            // style={{
            //   background: "rgb(0,212,255)",
            //   background: `linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(0,212,255,1) ${getSongPercent}%, rgba(2,0,36,1) ${getSongPercent}%)`
            // }}
          />
        </div>
        <div className="time-stamps">
          <div className="current-progress">
            {secondsToMinutes(songProgress)}
          </div>
          <div className="song-length">{secondsToMinutes(songLength)}</div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
