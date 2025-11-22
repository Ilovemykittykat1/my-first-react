import { useState } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import "./App.css";

// I’m importing my components (Login, Playlist, Player).
// These are the pages I created — each one handles its own screen.

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // Remembers if the user is logged in or not.

  const [currentScreen, setCurrentScreen] = useState("playlist");
  // This is like a map that guides the user from page to page (login → playlist → player).

  const [currentSong, setCurrentSong] = useState(0);
  // Remembers which song the user clicked.

  // My list of songs — this is the data used for Playlist and Player.
  const songs = [
<<<<<<< HEAD
    {
      title: "Katherine Rocks",
      artist: "Katherine",
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
=======
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

>>>>>>> e5dc28aebad2f38ff0e8bcd0186a7ca6df9d545c

  const handleSelectSong = (index) => {
    setCurrentSong(index);
    // Remembers which song the user clicked.

    setCurrentScreen("player");
    // Switches the page to the Player screen.
  };

  return (
    <div className="app-container">

      {/* If you're NOT logged in → show the Login page */}
      {!loggedIn && (
        <>
          <Login onLogin={() => setLoggedIn(true)} />
          {/* When you click GET STARTED, loggedIn becomes true */}
          <Footer />
        </>
      )}

      {/* If you're logged in AND you're on the playlist screen */}
      {loggedIn && currentScreen === "playlist" && (
        <>
          <Playlist songs={songs} onSelectSong={handleSelectSong} />
          {/* Playlist gets the songs + the function that runs when a song is clicked */}
          <Footer />
        </>
      )}

      {/* If you're logged in AND you're on the player screen */}
      {loggedIn && currentScreen === "player" && (
        <>
          <Player
            song={songs[currentSong]}
            // Player gets the exact song you clicked.

            onBack={() => setCurrentScreen("playlist")}
            // Back button takes you back to the Playlist screen.
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
