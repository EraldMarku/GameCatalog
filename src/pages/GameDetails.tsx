// src/pages/GameDetails.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Game } from "../types/Game";
import Header from "../components/Header";

const GameDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showMoreAbout, setShowMoreAbout] = useState(false); // State to toggle show more/less for about
  const [language, setLanguage] = useState<"en" | "es">("en"); // Default to English

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get<Game>(
          `https://api.rawg.io/api/games/${id}?key=2bc999c08e3346b682a4a148e489bd50`
        );
        setGame(response.data);
      } catch (err) {
        setError("Failed to fetch game details");
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);

  const toggleAboutText = () => {
    setShowMoreAbout(!showMoreAbout);
  };

  const renderDescription = (description: string | undefined) => {
    if (!description) return null;

    // Replace <p> and <br /> with newline characters for easier rendering
    let formattedDescription = description
      .replace(/<\/?p>/g, "\n")
      .replace(/<br \/>/g, "\n");

    // Handle language selection
    if (language === "es") {
      // Remove English text and only show Spanish if available
      formattedDescription = formattedDescription.split("\n\n")[1] || "";
    } else {
      // Show English by default
      formattedDescription = formattedDescription.split("\n\n")[0] || "";
    }

    // Limit the displayed characters for the initial view
    return showMoreAbout
      ? formattedDescription
      : formattedDescription.slice(0, 200);
  };

  const switchLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
    setShowMoreAbout(false); // Reset show more/less state when switching language
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!game) return <div>Game not found</div>;

  return (
    <div
      style={{
        backgroundColor: "#4c5f7a",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
      }}
    >
      <Header
        setSearchQuery={() => {}} // Placeholder function
        playedGamesCount={0}
        onAddToPlayed={() => {}} // Placeholder function
      />
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <img
          src={game.background_image}
          alt={game.name}
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            borderRadius: "10px",
            marginTop: "40px",
          }}
        />
        <h2>{game.name}</h2>
        <div style={{ marginBottom: "20px" }}>
          <strong>About:</strong> {renderDescription(game.description)}
          {game.description.length > 400 && (
            <span
              onClick={toggleAboutText}
              style={{
                cursor: "pointer",
                color: "#321d2f", // Set text color to dark purple
                marginLeft: "5px",
                textDecoration: "none", // Remove underline
              }}
            >
              {showMoreAbout ? "Show less" : "Show more"}
            </span>
          )}
        </div>
        <p>
          <strong>Platforms:</strong>{" "}
          {game.platforms && game.platforms.length > 0
            ? game.platforms
                .map(
                  (platform: { platform: { name: any } }) =>
                    platform.platform.name
                )
                .join(", ")
            : "Not available"}
        </p>
        <p>
          <strong>Genre:</strong>{" "}
          {game.genres && game.genres.length > 0
            ? game.genres.map((genre) => genre.name).join(", ")
            : "Not available"}
        </p>
        <p>
          <strong>Released At:</strong>{" "}
          {game.released
            ? new Date(game.released).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Not available"}
        </p>
        <p>
          <strong>Developer:</strong>{" "}
          {game.developers && game.developers.length > 0
            ? game.developers
                .map((developer: { name: any }) => developer.name)
                .join(", ")
            : "Not available"}
        </p>
        <p>
          <strong>Publisher:</strong>{" "}
          {game.publishers && game.publishers.length > 0
            ? game.publishers
                .map((publisher: { name: any }) => publisher.name)
                .join(", ")
            : "Not available"}
        </p>
        <p>
          <strong>Rating:</strong> {game.rating}
        </p>
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              marginRight: "10px",
              backgroundColor: language === "en" ? "#ffffff" : "#4c5f7a",
              color: language === "en" ? "#4c5f7a" : "#ffffff",
              border: "none",
              padding: "8px 16px",
              cursor: "pointer",
            }}
            onClick={() => switchLanguage("en")}
          >
            English
          </button>
          <button
            style={{
              backgroundColor: language === "es" ? "#ffffff" : "#4c5f7a",
              color: language === "es" ? "#4c5f7a" : "#ffffff",
              border: "none",
              padding: "8px 16px",
              cursor: "pointer",
            }}
            onClick={() => switchLanguage("es")}
          >
            Español
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
