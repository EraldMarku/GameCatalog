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
  useMediaQuery,
  useTheme,
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
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
  onAddToPlayed: () => void;
  onRemoveFromPlayed?: () => void;
}

const CardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: "#393e6f",
  color: "#ffffff",
  marginBottom: "20px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.6)",
  transition: "box-shadow 0.3s ease-in-out",

  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "0px",
    marginRight: "10px",
  },

  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 1.2)",
  },
}));

const PlatformIconContainer = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const GameCard: React.FC<GameCardProps> = ({
  game,
  onAddToPlayed,
  onRemoveFromPlayed,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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

  const uniquePlatforms = Array.isArray(game.platforms)
    ? game.platforms.map((platform) => platform.platform.name.toLowerCase())
    : [];

  const gameGenres = game.genres.map((genre) => genre.name).join(", ");

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
        <Typography variant="body2" color="text.secondary"></Typography>
        <PlatformIconContainer container spacing={1}>
          {uniquePlatforms.map((platform, index) => (
            <Grid item key={index}>
              {getPlatformIcon(platform)}
            </Grid>
          ))}
        </PlatformIconContainer>
        <Typography variant="body2" color="text.secondary">
          <strong>Release Date:</strong> {game.releaseDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Genres:</strong> {gameGenres}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Rating:</strong> {game.rating}
        </Typography>
      </CardContent>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          sx={{
            width: "70%",
            backgroundColor: "#321d2f",
            marginRight: "5%",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
            },
          }}
          component={Link}
          to={`/game/${game.id}`}
        >
          Game Details
        </Button>
        {onRemoveFromPlayed ? (
          <Button
            variant="contained"
            sx={{
              width: "25%",
              backgroundColor: "#321d2f",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
              },
            }}
            onClick={onRemoveFromPlayed}
          >
            -
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              width: "25%",
              backgroundColor: "#321d2f",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
              },
            }}
            onClick={onAddToPlayed}
          >
            +
          </Button>
        )}
      </div>
    </CardWrapper>
  );
};

export default GameCard;
