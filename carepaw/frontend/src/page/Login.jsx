import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { NavLink, useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Send login request to the server
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // Retrieve user ID and token from the response
      const { userId, token } = response.data;

      // Store user ID and token in local storage
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);

      // Set the login status
      setIsLoggedIn(true);

      // Redirect the user to the dashboard or another page
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <img
        src={"https://i.ibb.co/wSVXdpV/Logo2.png"}
        alt="Logo"
        style={{
          position: "absolute",
          top: "3vh",
          left: "3vw",
          maxWidth: "150px",
          height: "auto",
        }}
      />
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "130%",
            textAlign: "center",
            letterSpacing: "-0.01em",
            color: "#001858",
          }}
        >
          Log in
        </Typography>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password} // Add this line to bind the value
                onChange={(e) => setPassword(e.target.value)} // Add this line to capture input changes
                autoComplete="current-password"
              />
              <Button
                style={{
                  backgroundColor: "#001858",
                  fontWeight: "bold",
                }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}

              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "Hind",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#BEBEBF",
                  }}
                >
                  Don't have an account?
                  <Link to="/signup" variant="body2">
                    {"  Sign Up"}
                  </Link>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
