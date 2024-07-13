// src/components/Sidebar.tsx

import React, { useState } from "react";
import { Drawer, Button, Typography, Hidden, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface SidebarProps {
  onGenreSelect: (genre: string) => void;
  onPlatformSelect: (platform: string) => void;
  selectedGenres: string[];
  selectedPlatforms: string[];
  onGenreDeselect: (genre: string) => void;
  onPlatformDeselect: (platform: string) => void;
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleGenreChange = (selectedGenre: string) => {
    if (selectedGenres.includes(selectedGenre)) {
      onGenreDeselect(selectedGenre);
    } else {
      onGenreSelect(selectedGenre);
    }
  };

  const handlePlatformChange = (selectedPlatform: string) => {
    if (selectedPlatforms.includes(selectedPlatform)) {
      onPlatformDeselect(selectedPlatform);
    } else {
      onPlatformSelect(selectedPlatform);
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
    "PlayStation 4",
    "Xbox One",
    "Mobile",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Linux",
  ];

  const drawerWidth = 220;

  const drawerContent = (
    <div style={{ padding: "16px" }}>
      <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
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
      <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
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
  );

  return (
    <>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            style: {
              width: `${drawerWidth}px`,
              backgroundColor: "#393e6f",
              color: "#ffffff",
              top: "65px",
              paddingTop: "16px",
              boxShadow: "10px 0px 0px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ marginLeft: 8 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          PaperProps={{
            style: {
              width: `${drawerWidth}px`,
              backgroundColor: "#393e6f",
              color: "#ffffff",
              top: "65px",
              paddingTop: "16px",
              boxShadow: "10px 0px 0px rgba(0, 0, 0, 0.3)",
            },
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawerContent}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
