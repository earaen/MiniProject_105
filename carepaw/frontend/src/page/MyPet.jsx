import React, { useState, useEffect } from "react";
import PetCard from "../components/PetComponent/PetCard";
import "./MyPet.css";
import AddNewPetButton from "../components/PetComponent/AddNewPetButton";
import axios from "axios";
import { Link } from "react-router-dom";

function MyPet() {
  const [pets, setPets] = useState([]);
  const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

  useEffect(() => {
    axios
      .get(`http://localhost:5000/mypet?userId=${userId}`)
      .then((response) => {
        setPets(response.data.pets);
      })
      .catch((error) => {
        console.error("Failed to fetch pets:", error);
      });
  }, [userId]);

  return (
    <div>
      <h1>My Pet</h1>
      <div className="PetContainer">
        <div className="PetCardList">
          {pets.map((pet) => (
            <PetCard
              key={pet.id}
              id={pet.id} // Pass the pet ID as a prop
              name={pet.name}
              breed={pet.breed}
              age={pet.age}
              gender={pet.gender}
              weight={pet.weight}
            />
          ))}

          <AddNewPetButton />
        </div>
      </div>
    </div>
  );
}

export default MyPet;
