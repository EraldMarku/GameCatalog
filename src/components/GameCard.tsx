// src/components/GameCard

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

const CardWrapper = styled(Card)({
  backgroundColor: "#393e6f",
  color: "#ffffff",
  marginBottom: "20px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

interface GameCardProps {
  game: Game;
  onAddToPlayed: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onAddToPlayed }) => {
  const getPlatformIcon = (platform: string): JSX.Element | null => {
    switch (platform.toLowerCase()) {
      case "playstation":
      case "playstation 3":
      case "playstation 4":
      case "playstation 5":
        return <FaPlaystation />;
      case "xbox":
      case "xbox 360":
      case "xbox one":
      case "xbox series x":
        return <FaXbox />;
      case "pc":
      case "windows":
        return <FaWindows />;
      case "ios":
      case "macos":
      case "apple":
        return <FaApple />;
      case "linux":
        return <FaLinux />;
      case "android":
        return <FaAndroid />;
      case "nintendo switch":
        return <SportsEsportsIcon />;
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
        <Typography variant="body2" color="text.secondary">
          {uniquePlatforms.map((platform, index) => (
            <React.Fragment key={index}>
              {getPlatformIcon(platform)}
              {index < uniquePlatforms.length - 1 ? " " : ""}
            </React.Fragment>
          ))}
        </Typography>
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
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid item xs={7}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ backgroundColor: "#321d2f", color: "#ffffff" }}
            onClick={() => {}}
          >
            Game Details
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ backgroundColor: "#321d2f", color: "#ffffff" }}
            onClick={() => onAddToPlayed(game)}
          >
            +
          </Button>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default GameCard;
