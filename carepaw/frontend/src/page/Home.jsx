import React from "react";
import "./Home.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import MyPet from "./MyPet";
function Home() {
  return (
    <div>
      <h1>Essential Tips for Responsible Pet Ownership</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "1rem",
          columnGap: "1rem",
          marginLeft: "80px",
          marginTop: "80px",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="choosingpet"
            height="140"
            image="https://www.ovma.org/assets/1/6/MainFCKEditorDimension/Dog-_choosing_dog.jpg"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontFamily: "Hind",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "20px",
                color: "#001858",
              }}
            >
              Choose the Right Pet
            </Typography>
            <Typography
              style={{
                fontFamily: "Hind",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                color: "#344E91",
              }}
            >
              Before getting a pet, research different breeds or species to find
              one that matches your lifestyle, living situation, and
              preferences. Consider factors such as size, activity level,
              maintenance requirements, and temperament.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="choosingpet"
            height="140"
            image="https://www.purina.co.uk/sites/default/files/2021-03/Article%20teaser%20dog%20feeding%202.jpg"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontFamily: "Hind",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "20px",
                color: "#001858",
              }}
            >
              Provide a Balanced Diet
            </Typography>
            <Typography
              style={{
                fontFamily: "Hind",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                color: "#344E91",
              }}
            >
              Ensure that your pet receives a nutritionally balanced diet
              appropriate for their species and age. Consult with a veterinarian
              to determine the best food and feeding schedule for your pet.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="choosingpet"
            height="140"
            image="https://www.aaha.org/globalassets/05-pet-health-resources/ask-aaha/ask_aaha_vetvisits_teaser.jpg"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontFamily: "Hind",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "20px",
                color: "#001858",
              }}
            >
              Regular Veterinary Care
            </Typography>
            <Typography
              style={{
                fontFamily: "Hind",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                color: "#344E91",
              }}
            >
              Schedule regular check-ups with a veterinarian to keep your pet
              healthy. Vaccinations, parasite prevention, dental care, and
              overall wellness exams are essential for their well-being.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <MyPet />
    </div>
  );
}

export default Home;
