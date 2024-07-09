// src/pages/login

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  styled,
  Theme,
  useTheme,
} from "@mui/material";

const LoginPageContainer = styled(Container)(({ theme }: { theme: Theme }) => ({
  backgroundColor: "#393e6f",
  padding: theme.spacing(1),
  borderRadius: theme.spacing(2),
  boxShadow: "15px 15px 15px rgba(0.5, 0.5, 0.5, 0.5)",
}));

const LoginPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const age = parseInt(formData.age);
    if (age < 18) {
      alert("You are underage. You must be 18 or older to access GamingZone.");
    } else {
      navigate("/home");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#4c5f7a",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginPageContainer maxWidth="sm" theme={theme}>
        <Typography
          variant="h4"
          sx={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            color: "#321d2f",
            marginBottom: theme.spacing(3),
          }}
        >
          User Log In:
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            marginBottom: theme.spacing(3),
            display: "grid",
            justifyContent: "baseline",
          }}
        >
          <TextField
            variant="standard"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            label="Name Surname"
            sx={{ width: "100%", marginBottom: theme.spacing(2) }}
          />
          <TextField
            variant="standard"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            label="Email"
            sx={{ width: "100%", marginBottom: theme.spacing(2) }}
          />
          <TextField
            variant="standard"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            label="Age"
            sx={{ width: "100%", marginBottom: theme.spacing(2) }}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender:</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(2),
              }}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="standard"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            label="Username"
            sx={{ width: "100%", marginBottom: theme.spacing(2) }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#bebec0",
                color: "#393e6f",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                width: "60%",
                padding: theme.spacing(1.5),
                boxShadow: "5px 8px 15px rgba(0.4, 0.4, 0.4, 0.4)",
              }}
            >
              Log In
            </Button>
          </div>
        </form>
      </LoginPageContainer>
    </div>
  );
};

export default LoginPage;
