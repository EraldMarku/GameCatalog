// App.tsx

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddToPlayedGames from "./pages/AddToPlayedGames";
import { Game } from "./types/Game";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [playedGames, setPlayedGames] = useState<Game[]>([]);

  const handleAddToPlayed = (game: Game) => {
    if (!playedGames.find((g) => g.id === game.id)) {
      setPlayedGames((prevGames) => [...prevGames, game]);
    }
  };

  const handleRemoveFromPlayed = (game: Game) => {
    const updatedGames = playedGames.filter((g) => g.id !== game.id);
    setPlayedGames(updatedGames);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <div style={{ display: "flex" }}>
              <Sidebar
                onGenreSelect={(genre: string) => {
                  throw new Error("Function not implemented.");
                }}
                onPlatformSelect={(platform: string) => {
                  throw new Error("Function not implemented.");
                }}
              />
              <div style={{ flexGrow: 1 }}>
                <Header
                  setSearchQuery={setSearchQuery}
                  playedGamesCount={playedGames.length}
                  onAddToPlayed={() => {}}
                />
                <Home
                  searchQuery={searchQuery}
                  onAddToPlayed={handleAddToPlayed}
                />
              </div>
            </div>
          }
        />
        <Route
          path="/played-games"
          element={
            <div>
              <Header
                setSearchQuery={setSearchQuery}
                playedGamesCount={playedGames.length}
                onAddToPlayed={() => {}}
              />
              <AddToPlayedGames
                playedGames={playedGames}
                onRemoveFromPlayed={handleRemoveFromPlayed}
              />
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
