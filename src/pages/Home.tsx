// src/pages/home.tsx

import React, { useState, useEffect } from "react";
import GameCatalog from "../components/GameCatalog";
import Sidebar from "../components/Sidebar";
import { Grid, CircularProgress, Box, Container } from "@mui/material";
import { Game } from "../types/Game";
import axios from "axios";

interface HomePageProps {
  searchQuery: string;
  onAddToPlayed: (game: Game) => void; // Ensure this prop is correctly typed
}

const Home: React.FC<HomePageProps> = ({ searchQuery, onAddToPlayed }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  const fetchGames = async () => {
    try {
      const response = await axios.get(
        "https://api.rawg.io/api/games?key=2bc999c08e3346b682a4a148e489bd50"
      );
      const formattedGames = response.data.results.map((game: any) => ({
        id: game.id,
        name: game.name,
        releaseDate: game.released,
        genres: game.genres.map((genre: any) => ({ name: genre.name })),
        rating: game.rating,
        background_image: game.background_image,
        platform: game.platforms.map((platform: any) => platform.platform.name),
      }));
      setGames(formattedGames);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch games.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      fetchGames();
    }
  }, [searchQuery]);

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre
      ? game.genres.some((genre) => genre.name === selectedGenre)
      : true;
    const matchesPlatform = selectedPlatform
      ? game.platform.includes(selectedPlatform)
      : true;
    return matchesSearch && matchesGenre && matchesPlatform;
  });

  return (
    <div
      style={{
        backgroundColor: "#4c5f7a",
        minHeight: "100vh",
        color: "#ffffff",
      }}
    >
      <Container maxWidth="xl" style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={2}>
            <Sidebar
              onGenreSelect={setSelectedGenre}
              onPlatformSelect={setSelectedPlatform}
            />
          </Grid>
          <Grid item xs={12} lg={10}>
            <Box mt={5}>
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "80vh",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <GameCatalog
                  games={filteredGames}
                  onAddToPlayed={onAddToPlayed} // Pass onAddToPlayed function
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
