import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = ({ forcePlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (forcePlay && !isPlaying && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay prevented:", err);
      });
    }
  }, [forcePlay]);

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/media/bg-music.mp3" 
        loop 
      />
    </>
  );
};

export default AudioPlayer;
