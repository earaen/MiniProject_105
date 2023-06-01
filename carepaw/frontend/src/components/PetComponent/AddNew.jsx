import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import axios from "axios";
import "./AddNew.css";

function AddNew() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [medical, setMedical] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!name || !breed || !age || !weight || !medical) {
      alert("Please fill in all the required fields.");
      return;
    }

    const userId = localStorage.getItem("userId");
    const formData = {
      userId,
      name,
      breed,
      age,
      gender,
      weight,
      medical,
    };

    axios
      .post("http://localhost:5000/mypet", formData)
      .then((response) => {
        console.log("Pet added successfully");
        window.location.href = "/mypet";
      })
      .catch((error) => {
        console.error("Failed to add pet:", error);
      });
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          marginTop: "8px",
          width: 600,
          height: 450,
          backgroundColor: "#ffffff",
          boxShadow: "0px 0px 32px -10px rgba(0, 0, 0, 0.15)",
          borderRadius: "40px",
        }}
      >
        <Container sx={{ paddingTop: "1rem" }}>
          <form onSubmit={handleFormSubmit}>
            <label style={SECTION}>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
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
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
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
              <input
                type="text"
                name="breed"
                value={medical}
                onChange={(e) => setMedical(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <Container
              sx={{
                textAlign: "center",
                marginTop: "2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/mypet">
                <button className="CL">Cancel</button>
              </Link>
              <input type="submit" value="Submit" className="SM" />
            </Container>
          </form>
        </Container>
      </Container>
    </>
  );
}
export default AddNew;
const SECTION = {
  fontFamily: "Hind",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "26px",
  color: "#001858",
};
