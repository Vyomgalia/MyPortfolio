import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = ({ audioUrl }) => {
  return (
    <ReactAudioPlayer
      src={audioUrl}
      autoPlay={false}
      controls
    />
  );
};
