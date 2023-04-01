import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import ProgressBar from "./ProgressBar";

const Playback = () => {

  const changeTimestamp = (newTime) => {}

  const [songLength, setSongLength] = useState(158)
  const [songProgress, setSongProgress] = useState(64)
  const [paused, setPaused] = useState(true)

  return (
    <>
      <div className="playback-card">
        <Card>
          <div className="cover-image">
            <Image src="./ImagineDragonsEvolve.jpg" size="massive" centered/>
          </div>
          <Card.Content className="song-name">Thunder</Card.Content>
          <Card.Content className="artist">Imagine Dragons</Card.Content>
          <ProgressBar 
            songProgress={songProgress}
            songLength={songLength}
            isPaused={paused}
            setSongProgress={setSongProgress}
            changeTimestamp={changeTimestamp}
          />
        </Card>
      </div>
    </>
  );
};

export default Playback;
