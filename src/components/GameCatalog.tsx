// src/components/GameCatalog

import React from "react";
import GameCard from "./GameCard";
import "../App.css";
import { Game } from "../types/Game";

interface GameCatalogProps {
  games: Game[];
  onAddToPlayed: () => void;
}

const GameCatalog: React.FC<GameCatalogProps> = ({ games, onAddToPlayed }) => {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard key={game.id} game={game} onAddToPlayed={onAddToPlayed} />
      ))}
    </div>
  );
};

export default GameCatalog;
