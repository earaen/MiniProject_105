import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./ViewPet.css";
import axios from "axios";

const SECTION = {
  fontFamily: "Hind",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "26px",
  color: "#001858",
};

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
          minHeight: "80vh",
          minWidth: "80vh",
          marginTop: "70px",
          border: "2px solid #001858",
        }}
      >
        {pet ? (
          <>
            {!editMode ? (
              <>
                <Box
                  sx={{
                    marginBottom: "0.5em",
                    marginTop: "3em",
                    display: "flex,",
                    justifyContent: "space-evenly",
                    marginLeft: "2rem",
                  }}
                >
                  <span className="Topic-0" style={{ marginRight: "1rem" }}>
                    {pet.name}
                  </span>
                  <span>
                    <span className="Topic-1">{pet.age} yrs</span>
                  </span>

                  <div className="Topic-3">{pet.breed}</div>
                </Box>
                <Box
                  sx={{
                    marginBottom: "2em",
                    display: "flex,",
                    justifyContent: "space-evenly",
                    marginLeft: "2rem",
                  }}
                >
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
                    marginBottom: "2rem",
                    textAlign: "center",
                  }}
                >
                  <button className="ED" onClick={handleEdit}>
                    Edit
                  </button>
                  <button className="DL" onClick={handleDeleteConfirmation}>
                    Delete
                  </button>
                </Container>
              </>
            ) : (
              <>
                <Container sx={{ paddingTop: "1rem" }}>
                  <label style={SECTION}>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={editedPet.name}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </label>
                  <label style={SECTION}>
                    Age:
                    <input
                      type="text"
                      name="age"
                      value={editedPet.age}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </label>
                  <label style={SECTION}>
                    Breed:
                    <input
                      type="text"
                      name="breed"
                      value={editedPet.breed}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </label>
                  <label style={SECTION}>
                    Gender:
                    <input
                      type="text"
                      name="gender"
                      value={editedPet.gender}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </label>
                  <label style={SECTION}>
                    Weight:
                    <input
                      type="text"
                      name="weight"
                      value={editedPet.weight}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </label>
                  <label style={SECTION}>
                    Medical History:
                    <textarea
                      name="medical"
                      value={editedPet.medical}
                      onChange={handleChange}
                      rows="4"
                      cols="50"
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </label>
                </Container>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "0em",
                    textAlign: "center",
                  }}
                >
                  <button className="CL" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button className="SM" onClick={handleSave}>
                    Save
                  </button>
                </Container>
              </>
            )}
            {showDeleteConfirmation && (
              <div className="overlay">
                <div className="confirmation-box">
                  <p
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "14px",
                      color: "#001858",
                    }}
                  >
                    Do you want to delete this pet?
                  </p>
                  <button className="CL" onClick={handleDeleteCancel}>
                    Cancel
                  </button>
                  <button className="DL" onClick={handleDelete}>
                    Delete
                  </button>
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
