// src/components/Sidebar
import React, { useState } from "react";
import { Drawer, Button, Typography, Hidden } from "@mui/material";

interface SidebarProps {
  onGenreSelect: (genre: string) => void;
  onPlatformSelect: (platform: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onGenreSelect,
  onPlatformSelect,
}) => {
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [showMoreGenres, setShowMoreGenres] = useState(false);
  const [showMorePlatforms, setShowMorePlatforms] = useState(false);

  const handleGenreChange = (selectedGenre: string) => {
    setGenre(selectedGenre);
    onGenreSelect(selectedGenre);
  };

  const handlePlatformChange = (selectedPlatform: string) => {
    setPlatform(selectedPlatform);
    onPlatformSelect(selectedPlatform);
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
                      color: genre === genreOption ? "#ffffff" : "#cccccc",
                      textTransform: "none",
                      display: "block",
                      marginBottom: "8px",
                      textAlign: "left",
                      fontWeight: genre === genreOption ? "bold" : "normal",
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
                      color:
                        platform === platformOption ? "#ffffff" : "#cccccc",
                      textTransform: "none",
                      display: "block",
                      marginBottom: "8px",
                      textAlign: "left",
                      fontWeight:
                        platform === platformOption ? "bold" : "normal",
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
