// src/pages/AddToPlayedGames.tsx

import React from "react";
import { Game } from "../types/Game";
import GameCard from "../components/GameCard";
import { Grid, Container, Typography } from "@mui/material";

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
        paddingTop: "80px",
      }}
    >
      <Container maxWidth="xl">
        {playedGames.length === 0 ? (
          <Typography variant="h6" align="center" style={{ marginTop: "80px" }}>
            No Games Added To Play
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {playedGames.map((game) => (
              <Grid key={game.id} item xs={12} sm={6} md={4} lg={2}>
                <GameCard
                  game={game}
                  onRemoveFromPlayed={() => onRemoveFromPlayed(game)}
                  onAddToPlayed={() => {
                    throw new Error("Function not implemented.");
                  }}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default AddToPlayedGames;
