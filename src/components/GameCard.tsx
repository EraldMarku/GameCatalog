// src/components/GameCard.tsx

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  styled,
} from "@mui/material";
import { Game } from "../types/Game";
import {
  FaPlaystation,
  FaWindows,
  FaLinux,
  FaAndroid,
  FaApple,
  FaXbox,
} from "react-icons/fa";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

interface GameCardProps {
  game: Game;
  onAddToPlayed: () => void; // Updated prop type for adding games
  onRemoveFromPlayed?: () => void; // New optional prop for removing games
}

const CardWrapper = styled(Card)({
  backgroundColor: "#393e6f",
  color: "#ffffff",
  marginBottom: "20px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const GameCard: React.FC<GameCardProps> = ({
  game,
  onAddToPlayed,
  onRemoveFromPlayed,
}) => {
  const getPlatformIcon = (platform: string): JSX.Element | null => {
    switch (platform.toLowerCase()) {
      case "playstation":
      case "playstation 3":
      case "playstation 4":
      case "playstation 5":
        return <FaPlaystation color="#000000" />;
      case "xbox":
      case "xbox 360":
      case "xbox one":
      case "xbox series x":
        return <FaXbox color="#000000" />;
      case "pc":
      case "windows":
        return <FaWindows color="#000000" />;
      case "ios":
      case "macos":
      case "apple":
        return <FaApple color="#000000" />;
      case "linux":
        return <FaLinux color="#000000" />;
      case "android":
        return <FaAndroid color="#000000" />;
      case "nintendo switch":
        return <SportsEsportsIcon style={{ color: "#000000" }} />;
      default:
        return null;
    }
  };

  const uniquePlatforms = Array.from(
    new Set(game.platform.map((platform) => platform.toLowerCase()))
  );

  return (
    <CardWrapper>
      <CardMedia
        component="img"
        image={game.background_image}
        alt={game.name}
        height="140"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <Grid container spacing={1} style={{ marginBottom: "10px" }}>
          {uniquePlatforms.map((platform) => (
            <Grid item key={platform}>
              {getPlatformIcon(platform)}
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" color="text.secondary">
          Release Date: {game.releaseDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genres: {game.genres.map((genre) => genre.name).join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {game.rating}
        </Typography>
      </CardContent>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          style={{
            width: "70%",
            backgroundColor: "#321d2f",
            marginRight: "5%",
          }}
        >
          Game Details
        </Button>
        {onRemoveFromPlayed ? (
          <Button
            variant="contained"
            style={{ width: "25%", backgroundColor: "#321d2f" }}
            onClick={onRemoveFromPlayed} // Call onRemoveFromPlayed if provided
          >
            -
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{ width: "25%", backgroundColor: "#321d2f" }}
            onClick={onAddToPlayed} // Fallback to onAddToPlayed if onRemoveFromPlayed is not provided
          >
            +
          </Button>
        )}
      </div>
    </CardWrapper>
  );
};

export default GameCard;
