import { useRef } from "react";
import "./Player.css";

function Player({ song, onBack }) {
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().catch((err) => {
      console.log("Play blocked or switching screens", err);
    });
  };

  const handlePause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
  };

  return (
    <div className="player-wrapper">

      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <div className="player-card">
        <h2 className="now-playing">Now Playing</h2>

        <div className="note-icon">🎵</div>

        <h1 className="song-title">{song.title}</h1>
        <p className="song-artist">{song.artist}</p>

        <audio ref={audioRef} src={song.file}></audio>

        <button className="play-btn" onClick={handlePlay}>Play</button>
        <button className="pause-btn" onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

export default Player;
