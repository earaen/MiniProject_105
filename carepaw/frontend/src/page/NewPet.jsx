import React from "react";
import AddNew from "../components/PetComponent/AddNew";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";

function NewPet() {
  return (
    <>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: "49px",
          color: "#001858",
          marginTop: "70px", // Adjust this value as necessary
        }}
      >
        <FaDog /> New Pet
      </div>
      <AddNew />
    </>
  );
}

export default NewPet;
