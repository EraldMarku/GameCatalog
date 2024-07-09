// src/components/Header

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Button,
  Badge,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState("");

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

  return (
    <AppBar style={{ backgroundColor: "#393e6f" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" style={{ color: "#ffffff" }}>
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
        <IconButton aria-label="Add to played games" color="inherit">
          <Badge color="secondary">
            <AddCircleOutlineIcon style={{ color: "#ffffff" }} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
