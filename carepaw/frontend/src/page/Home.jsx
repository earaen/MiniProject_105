import React from "react";
import "./Home.css";

import MyPet from "./MyPet";
function Home() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  return (
    <div>
      <div style={{ padding: "100px" }}>User ID: {userId}</div>
      <MyPet />
    </div>
  );
}

export default Home;
