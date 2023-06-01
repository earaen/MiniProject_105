import React from "react";
import { Link } from "react-router-dom";
import "./PetCard.css";
import { IoPawSharp } from "react-icons/io5";
import { HiPencil, HiTrash } from "react-icons/hi";

function PetCard({ id, name, breed, age, gender, weight }) {
  return (
    <div>
      <div className="card">
        <div className="circle">
          <IoPawSharp className="paw" />
        </div>
        <div className="content">
          <div className="text">
            <p>{name}</p>
            <div>
              <span className="header" style={{ paddingRight: "40px" }}>
                Breed:
              </span>
              <span>{breed}</span>
            </div>
            <div>
              <span className="header" style={{ paddingRight: "52px" }}>
                Age:
              </span>
              <span className="age">{age}</span>
            </div>
            <div>
              <span className="header" style={{ paddingRight: "29px" }}>
                Gender:
              </span>
              <span className="gender">{gender}</span>
            </div>
            <div>
              <span className="header" style={{ paddingRight: "29px" }}>
                Weight:
              </span>
              <span className="Weight">{weight}</span>
            </div>
          </div>
          <div className="PetButton">
            <Link to={`/mypet/${id}?`}>
              <button className="View">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
