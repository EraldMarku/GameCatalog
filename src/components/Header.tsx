// src/components/Header.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface HeaderProps {
  setSearchQuery: (query: string) => void;
  playedGamesCount: number;
  onAddToPlayed: () => void; // New prop to handle adding games to played
}

const Header: React.FC<HeaderProps> = ({
  setSearchQuery,
  playedGamesCount,
  onAddToPlayed,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    if (event.target.value === "") {
      setSearchQuery("");
    }
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(searchInput);
  };

  const handleTitleClick = () => {
    navigate("/home");
  };

  return (
    <AppBar style={{ backgroundColor: "#393e6f" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h4"
          style={{ color: "#ffffff", cursor: "pointer" }}
          onClick={handleTitleClick}
        >
          Gaming Zone
        </Typography>
        <form
          onSubmit={handleSearchSubmit}
          style={{ display: "flex", alignItems: "center" }}
        >
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchInput}
            onChange={handleSearchChange}
            style={{ marginRight: 8, color: "#ffffff" }}
          />
          <Button
            variant="contained"
            type="submit"
            style={{ backgroundColor: "#321d2f", color: "#ffffff" }}
          >
            Search
          </Button>
        </form>
        <IconButton
          aria-label="Add to played games"
          color="inherit"
          onClick={() => {
            onAddToPlayed(); // Call the new prop function to handle adding games
            navigate("/played-games");
          }}
        >
          <Badge color="error" badgeContent={playedGamesCount}>
            <AddCircleOutlineIcon style={{ color: "#ffffff" }} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
