// src/components/Sidebar.tsx
import React, { useState } from "react";
import { Drawer, Button, Typography, Hidden } from "@mui/material";

interface SidebarProps {
  onGenreSelect: (genre: string) => void;
  onPlatformSelect: (platform: string) => void;
  selectedGenres: string[]; // Maintain selected genres state
  selectedPlatforms: string[]; // Maintain selected platforms state
  onGenreDeselect: (genre: string) => void; // Add deselection handler
  onPlatformDeselect: (platform: string) => void; // Add deselection handler
}

const Sidebar: React.FC<SidebarProps> = ({
  onGenreSelect,
  onPlatformSelect,
  selectedGenres,
  selectedPlatforms,
  onGenreDeselect,
  onPlatformDeselect,
}) => {
  const [showMoreGenres, setShowMoreGenres] = useState(false);
  const [showMorePlatforms, setShowMorePlatforms] = useState(false);

  const handleGenreChange = (selectedGenre: string) => {
    if (selectedGenres.includes(selectedGenre)) {
      onGenreDeselect(selectedGenre); // Deselect if already selected
    } else {
      onGenreSelect(selectedGenre); // Select if not selected
    }
  };

  const handlePlatformChange = (selectedPlatform: string) => {
    if (selectedPlatforms.includes(selectedPlatform)) {
      onPlatformDeselect(selectedPlatform); // Deselect if already selected
    } else {
      onPlatformSelect(selectedPlatform); // Select if not selected
    }
  };

  const genres = [
    "Action",
    "Adventure",
    "RPG",
    "Free Online Games",
    "Strategy",
    "Shooter",
    "Puzzle",
    "Sports",
    "Racing",
  ];

  const platforms = [
    "PC",
    "Xbox One",
    "Mobile",
    "Nintendo Switch",
    "PlayStation 4",
    "iOS",
    "Android",
  ];

  return (
    <>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            style: {
              width: "200px",
              backgroundColor: "#393e6f",
              color: "#ffffff",
              top: "65px",
              paddingTop: "16px",
              boxShadow: "10px 0px 0px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <div style={{ padding: "16px" }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              Genre
            </Typography>
            <div style={{ marginBottom: "16px" }}>
              {genres
                .slice(0, showMoreGenres ? genres.length : 3)
                .map((genreOption) => (
                  <Button
                    key={genreOption}
                    onClick={() => handleGenreChange(genreOption)}
                    style={{
                      color: selectedGenres.includes(genreOption)
                        ? "#ffffff"
                        : "#cccccc",
                      textTransform: "none",
                      display: "block",
                      marginBottom: "8px",
                      textAlign: "left",
                      fontWeight: selectedGenres.includes(genreOption)
                        ? "bold"
                        : "normal",
                    }}
                  >
                    {genreOption}
                  </Button>
                ))}
              {genres.length > 3 && (
                <Button
                  onClick={() => setShowMoreGenres(!showMoreGenres)}
                  style={{
                    color: "#ffffff",
                    marginTop: "8px",
                    textTransform: "none",
                  }}
                >
                  {showMoreGenres ? "Show Less" : "Show More"}
                </Button>
              )}
            </div>
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              Platform
            </Typography>
            <div>
              {platforms
                .slice(0, showMorePlatforms ? platforms.length : 3)
                .map((platformOption) => (
                  <Button
                    key={platformOption}
                    onClick={() => handlePlatformChange(platformOption)}
                    style={{
                      color: selectedPlatforms.includes(platformOption)
                        ? "#ffffff"
                        : "#cccccc",
                      textTransform: "none",
                      display: "block",
                      marginBottom: "8px",
                      textAlign: "left",
                      fontWeight: selectedPlatforms.includes(platformOption)
                        ? "bold"
                        : "normal",
                    }}
                  >
                    {platformOption}
                  </Button>
                ))}
              {platforms.length > 3 && (
                <Button
                  onClick={() => setShowMorePlatforms(!showMorePlatforms)}
                  style={{
                    color: "#ffffff",
                    marginTop: "8px",
                    textTransform: "none",
                  }}
                >
                  {showMorePlatforms ? "Show Less" : "Show More"}
                </Button>
              )}
            </div>
          </div>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
