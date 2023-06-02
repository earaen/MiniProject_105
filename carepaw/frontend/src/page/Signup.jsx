import React, { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Send signup request to the server
    axios
      .post("http://localhost:5000/signup", { username, email, password })
      .then((response) => {
        const { token } = response.data;
        // Redirect the user to the dashboard or another page
        // You can use the appropriate method for your frontend framework or library
        // For example, using react-router-dom:
        window.location.href = "/";
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  return (
    <>
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
            Sign up
          </Typography>
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="username"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      autoFocus
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Grid>
                </Grid>

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
                  Sign Up
                </Button>
                {error && (
                  <Typography color="error" variant="body2">
                    {error}
                  </Typography>
                )}
                <Grid container justifyContent="flex-end">
                  <Grid
                    item
                    sx={{
                      fontFamily: "Hind",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#BEBEBF",
                    }}
                  >
                    Already have an account?{" "}
                    <NavLink
                      to="/login"
                      variant="body2"
                      activeClassName="active-link"
                    >
                      Log in
                    </NavLink>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
