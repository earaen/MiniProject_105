import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

function ProfileCard() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserInformation = async () => {
      const userId = localStorage.getItem("userId");
      try {
        const response = await fetch(`http://localhost:5000/user/${userId}`);
        const data = await response.json();
        if (response.ok) {
          setUser(data);
          setUsername(data.username);
          setEmail(data.email);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Failed to fetch user information:", error);
      }
    };

    fetchUserInformation();
  }, []);

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("userId");
    localStorage.removeItem("token");

    // Redirect to "/login" page
    window.location.href = "/login";
  };

  const handleUpdateUser = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await fetch(`http://localhost:5000/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data);
        setShowModal(false);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Failed to update user information:", error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container">
      <div className="frame">
        <span className="MYPROFILE">My Profile</span>

        <div className="INFO">
          {user ? (
            <>
              <div className="INFOO">
                Username: <span className="username">{user.username}</span>
              </div>
              <div className="INFOO">
                Email: <span className="email">{user.email}</span>
              </div>
            </>
          ) : (
            <div>Loading user information...</div>
          )}

          <div style={{ display: "flex", marginTop: "2rem" }}>
            <button className="update" onClick={toggleModal}>
              Update
            </button>
            <button className="logout" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <label style={SECTION}>Username: </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <div></div>
            <label style={SECTION}>Email: </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "1rem",
              }}
            >
              <button className="CLL" onClick={toggleModal}>
                Cancel
              </button>
              <button className="UD" onClick={handleUpdateUser}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
const SECTION = {
  fontFamily: "Hind",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "26px",
  color: "#001858",
};
