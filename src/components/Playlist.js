import React from "react";
import "./Playlist.css";

function Playlist({ songs, onSelectSong }) {
  return (
    <div className="playlist-wrapper">
      
      <h1 className="playlist-title">MUSIC PLAYLIST</h1>

      <div className="song-list">
        {songs.map((song, index) => (
          <div
            key={index}
            className="song-row"
            onClick={() => onSelectSong(index)}
          >
            {/* Thumbnail Circle */}
            <div className="song-thumb"></div>

            {/* Song Text Info */}
            <div className="song-info">
              <p className="song-name">{song.title}</p>
              <p className="song-artist">{song.artist}</p>
              <p className="song-album">{song.album}</p>
            </div>

            {/* Icons */}
            <div className="song-actions">
              <span className="heart">♡</span>
              <span className="play-btn-small">▶</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
