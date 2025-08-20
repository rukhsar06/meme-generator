import { useRef, useState } from "react";
import music from "./music.mp3";
import music2 from "./music2.mp3";
import "./Music.css"; 
export default function Music() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  // Playlist (imported songs)
  const playlist = [music, music2];

  const playMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const stopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const rewindMusic = () => {
    audioRef.current.currentTime = 0;
  };

  const nextSong = () => {
    let nextIndex = (currentSong + 1) % playlist.length;
    setCurrentSong(nextIndex);
    setIsPlaying(true);
  };

  const prevSong = () => {
    let prevIndex = (currentSong - 1 + playlist.length) % playlist.length;
    setCurrentSong(prevIndex);
    setIsPlaying(true);
  };

  return (
    <div className="music-player">
      <h2 className="text-2xl font-bold">🎵Music Player</h2>
      <p className="text-sm italic">Enjoy the vibes ✨</p>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src={playlist[currentSong]}
        onLoadedMetadata={() => {
          if (isPlaying) {
            audioRef.current.play();
          }
        }}
      />

      {/* Controls */}
      <div className="controls">
        <button
          onClick={prevSong}
          className="prev"
        >
          ⏮
        </button>
        {isPlaying ? (
          <button
            onClick={pauseMusic}
            className="pause">
            ⏸
          </button>
        ) : (
          <button
            onClick={playMusic}
            className="play">
            ▶
          </button>
        )}
        <button
          onClick={stopMusic}
          className="stop">
          ⏹
        </button>
        <button
          onClick={rewindMusic}
          className="rewind" >
          ⏪
        </button>
        <button
          onClick={nextSong}
          className="next-btn">
          ⏭
        </button>
      </div>

      <p className="text-xs mt-2">Now Playing: {`Song ${currentSong + 1}`}</p>
    </div>
  );
}
