import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./ViewPet.css";
import axios from "axios";

export default function Pet() {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchPetData();
  }, [petId, userId]); // Include petId and userId as dependencies

  const fetchPetData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/mypet/${petId}?userId=${userId}` // Pass userId as a query parameter
      );
      const petData = response.data;

      setPet(petData);
    } catch (error) {
      console.error("Failed to fetch pet data:", error);
      throw new Error("Failed to fetch pet data");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          boxShadow: "0px 0px 32px -10px rgba(0, 0, 0, 0.15)",
          borderRadius: "40px",
          height: "80vh",
          width: "120vh",
          marginTop: "70px",
          border: "2px solid #001858",
        }}
      >
        {pet ? (
          <>
            <Box>
              <div className="Topic-0">{pet.name}</div>
              <div className="Topic-1">{pet.age} yrs</div>
              <div className="Topic-3">{pet.breed}</div>
            </Box>
            <div className="Lk"></div>
            <div className="Topic">{pet.gender}</div>
            <div className="Lk"></div>
            <div className="Topic">{pet.weight}</div>
            <div className="Lk"></div>
            <div className="Topic">{pet.medical}</div>
          </>
        ) : (
          <div>Loading pet data...</div>
        )}
      </Box>
    </Container>
  );
}
