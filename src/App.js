import { useState } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("playlist");
  const [currentSong, setCurrentSong] = useState(0);

  const songs = [
  {
    title: "Sample Song",
    artist: "Unknown Artist",
    album: "Album One",
    file: process.env.PUBLIC_URL + "/sample.mp3",
  },
  {
    title: "Crystal Waves",
    artist: "DJ Aurora",
    album: "Neon Dreams",
    file: process.env.PUBLIC_URL + "/song2.mp3",
  },
  {
    title: "Skyline",
    artist: "Luna Beats",
    album: "City Nights",
    file: process.env.PUBLIC_URL + "/song3.mp3",
  },
];


  const handleSelectSong = (index) => {
    setCurrentSong(index);
    setCurrentScreen("player");
  };

  return (
    <div className="app-container">

      {!loggedIn && (
        <>
          <Login onLogin={() => setLoggedIn(true)} />
          <Footer />
        </>
      )}

      {loggedIn && currentScreen === "playlist" && (
        <>
          <Playlist songs={songs} onSelectSong={handleSelectSong} />
          <Footer />
        </>
      )}

      {loggedIn && currentScreen === "player" && (
        <>
          <Player
            song={songs[currentSong]}
            onBack={() => setCurrentScreen("playlist")}
          />
          <Footer />
        </>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-bar">
      © 2025 Katherine McNeil — All Rights Reserved
    </footer>
  );
}

export default App;
