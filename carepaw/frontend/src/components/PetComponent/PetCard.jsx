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
            <h5>
              Breed <span className="Breed">{breed}</span>
            </h5>
            <h5>
              Age <span className="Age">{age}</span>
            </h5>
            <h5>
              Gender <span className="Gender">{gender}</span>
            </h5>
            <h5>
              Weight <span className="Weight">{weight}</span>
            </h5>
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
