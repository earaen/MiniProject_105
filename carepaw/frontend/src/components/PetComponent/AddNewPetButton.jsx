import React from "react";
import { Link } from "react-router-dom";
import "./AddNewPetButton.css";
import { FaPlus } from "react-icons/fa";

function AddNewPetButton() {
  return (
    <div className="AllCard">
      <Link to="/newpet" className="addnewcard">
        <FaPlus className="plus-icon" />
      </Link>
    </div>
  );
}

export default AddNewPetButton;
