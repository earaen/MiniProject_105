import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./ViewPet.css";
import axios from "axios";

export default function Pet() {
  const { petId } = useParams();

  const [pet, setPet] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedPet, setEditedPet] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
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

  const handleEdit = () => {
    setEditMode(true);
    setEditedPet({
      name: pet.name,
      breed: pet.breed,
      age: pet.age,
      gender: pet.gender,
      weight: pet.weight,
      medical: pet.medical,
    });
  };

  const handleSave = async () => {
    try {
      // Send the updated pet information to the server
      await axios.put(`http://localhost:5000/mypet/${petId}`, {
        userId,
        ...editedPet,
      });
      setPet(editedPet);
      setEditMode(false);
    } catch (error) {
      console.error("Failed to update pet:", error);
      throw new Error("Failed to update pet");
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedPet(null);
  };

  const handleDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  const handleDelete = async () => {
    try {
      // Send the delete request to the server
      await axios.delete(
        `http://localhost:5000/mypet/${petId}?userId=${userId}`
      );
      // Redirect to the home page after deleting the pet
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to delete pet:", error);
      throw new Error("Failed to delete pet");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedPet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            {!editMode ? (
              <>
                <Box sx={{ marginBottom: "2em", marginTop: "3em" }}>
                  <div className="Topic-0">{pet.name}</div>
                  <div className="Topic-1">{pet.age} yrs</div>
                  <div className="Topic-3">{pet.breed}</div>
                </Box>
                <Box>
                  <div className="Lk"></div>
                  <span>
                    <span className="Topic">Gender: </span>
                    <span>{pet.gender}</span>
                  </span>
                  <div className="Lk"></div>
                  <span>
                    <span className="Topic">Weight: </span>
                    <span>{pet.weight}</span>
                  </span>
                  <div className="Lk"></div>
                  <span>
                    <span className="Topic">Medical History: </span>
                    <span>{pet.medical}</span>
                  </span>
                </Box>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "0em",
                  }}
                >
                  <button onClick={handleEdit}>Edit</button>
                  <button onClick={handleDeleteConfirmation}>Delete</button>
                </Container>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  value={editedPet.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="age"
                  value={editedPet.age}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="breed"
                  value={editedPet.breed}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="gender"
                  value={editedPet.gender}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="weight"
                  value={editedPet.weight}
                  onChange={handleChange}
                />
                <textarea
                  name="medical"
                  value={editedPet.medical}
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            )}
            {showDeleteConfirmation && (
              <div className="overlay">
                <div className="confirmation-box">
                  <p>Are you sure you want to delete this pet?</p>
                  <button onClick={handleDelete}>Yes</button>
                  <button onClick={handleDeleteCancel}>No</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div>Loading pet data...</div>
        )}
      </Box>
    </Container>
  );
}
