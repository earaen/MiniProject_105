import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./page/Home";
import MyPet from "./page/MyPet";
import Signup from "./page/Signup";
import Profile from "./page/Profile";
import SideBar from "./components/Sidebar/SideBar";
import Login from "./page/Login";
import "./App.css";
import NewPet from "./page/NewPet";
import ViewPet from "./page/ViewPet";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    if (userId && token) {
      // User is logged in
      setIsLoggedIn(true);
    } else {
      // User is not logged in
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Router>
      {isLoggedIn && <SideBar className="sidesidebar" />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mypet"
          element={isLoggedIn ? <MyPet /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/newpet"
          element={isLoggedIn ? <NewPet /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/mypet/:petId"
          element={isLoggedIn ? <ViewPet /> : <Navigate to="/login" replace />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <Login setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/signup"
          element={!isLoggedIn ? <Signup /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
// import React from "react";
// import OnePet from "./components/Pet/OnePet";

// function App() {
//   return (
//     <div>
//       <OnePet />
//     </div>
//   );
// }

// export default App;
