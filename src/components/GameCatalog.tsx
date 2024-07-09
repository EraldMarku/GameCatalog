// src/components/GameCatalog

import React from "react";
import GameCard from "./GameCard";
import { Game } from "../types/Game";
import { Grid, styled } from "@mui/material";

interface GameCatalogProps {
  games: Game[];
  onAddToPlayed: (game: Game) => void;
}

const GridContainer = styled(Grid)({
  marginTop: "20px",
});

const GameCatalog: React.FC<GameCatalogProps> = ({ games, onAddToPlayed }) => {
  return (
    <GridContainer container spacing={3}>
      {games.map((game) => (
        <Grid key={game.id} item xs={12} sm={6} md={4} lg={3}>
          <GameCard game={game} onAddToPlayed={() => onAddToPlayed(game)} />
        </Grid>
      ))}
    </GridContainer>
  );
};

export default GameCatalog;
