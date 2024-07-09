// src/pages/AddToPlayedGames.tsx

import React from "react";
import { Game } from "../types/Game";
import GameCard from "../components/GameCard";
import { Grid, Container } from "@mui/material";

interface AddToPlayedGamesProps {
  playedGames: Game[];
  onRemoveFromPlayed: (game: Game) => void;
}

const AddToPlayedGames: React.FC<AddToPlayedGamesProps> = ({
  playedGames,
  onRemoveFromPlayed,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#4c5f7a",
        minHeight: "100vh",
        color: "#ffffff",
      }}
    >
      <Container maxWidth="xl" style={{ paddingTop: "80px" }}>
        <Grid container spacing={3}>
          {playedGames.map((game) => (
            <Grid key={game.id} item xs={12} sm={6} md={4} lg={2}>
              <GameCard
                game={game}
                onRemoveFromPlayed={() => onRemoveFromPlayed(game)}
                onAddToPlayed={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AddToPlayedGames;
