const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Database Connection
const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_lojtb",
  password: "ruQTJEOe9hNYg69P",
  database: "lab_blank01_l3ftkg",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database is connected");
  }
});
global.connection = connection;

// Create express app
const app = express();
const port = 5000;

var corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};
app.use(express.json());

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", require("./endpoints/test"));
app.post("/signup", require("./endpoints/endpoint_signup"));
app.post("/login", require("./endpoints/endpoint_login"));
app.get("/user/:userId", require("./endpoints/endpoint_user"));
app.put("/user/:userId", require("./endpoints/endpoint_edituser"));

app.get("/mypet", require("./endpoints/endpoint_showpet"));
app.post("/mypet", require("./endpoints/endpoint_createpet"));
app.get("/mypet/:petId", require("./endpoints/endpoint_specificpet"));
app.put("/mypet/:petId", require("./endpoints/endpoint_editpet"));
app.delete("/mypet/:petId", require("./endpoints/endpoint_deletepet"));

// // Signup endpoint
// app.post("/signup", async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Check if the email is already used
//     const checkEmailQuery = `SELECT * FROM users WHERE email = ?`;
//     connection.query(checkEmailQuery, [email], async (err, rows) => {
//       if (err) {
//         console.error("Error checking email:", err);
//         return res.status(500).json({ error: "Failed to check email" });
//       }

//       if (rows.length > 0) {
//         // Email is already used
//         return res.status(400).json({ error: "Email already used" });
//       }

//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Save user details to the database
//       const insertUserQuery = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
//       connection.query(
//         insertUserQuery,
//         [username, email, hashedPassword],
//         (err, result) => {
//           if (err) {
//             console.error("Error saving user:", err);
//             return res.status(500).json({ error: "Failed to save user" });
//           }

//           // Generate JWT token
//           const token = jwt.sign({ username, email }, "ZJGX1QL7ri6BGJWj3t", {
//             expiresIn: "1h",
//           });

//           res.status(200).json({ token });
//         }
//       );
//     });
//   } catch (error) {
//     console.error("Error hashing password:", error);
//     res.status(500).json({ error: "Failed to hash password" });
//   }
// });

// // Login endpoint
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user exists with the provided email
//     const checkUserQuery = "SELECT * FROM users WHERE email = ?";
//     connection.query(checkUserQuery, [email], async (err, rows) => {
//       if (err) {
//         console.error("Error checking user:", err);
//         return res.status(500).json({ error: "Failed to check user" });
//       }

//       if (rows.length === 0) {
//         // User does not exist
//         return res.status(400).json({ error: "Invalid email or password" });
//       }

//       const user = rows[0];

//       // Compare the provided password with the stored hashed password
//       const isPasswordValid = await bcrypt.compare(password, user.password);

//       if (!isPasswordValid) {
//         // Invalid password
//         return res.status(400).json({ error: "Invalid email or password" });
//       }

//       // Generate JWT token
//       const token = jwt.sign(
//         { username: user.username, email },
//         "ZJGX1QL7ri6BGJWj3t",
//         {
//           expiresIn: "1h",
//         }
//       );

//       // Send the token, user ID, and other user information in the response
//       res.status(200).json({ token, userId: user.id, user });
//     });
//   } catch (error) {
//     console.error("Error logging in:", error);
//     res.status(500).json({ error: "Failed to log in" });
//   }
// });

// // Get all pets for the logged-in user
// app.get("/mypet", (req, res) => {
//   const { userId } = req.query;

//   // Retrieve all pets for the logged-in user
//   const getPetsQuery = "SELECT * FROM mypet WHERE userId = ?";
//   connection.query(getPetsQuery, [userId], (err, pets) => {
//     if (err) {
//       console.error("Error retrieving pets:", err);
//       return res.status(500).json({ error: "Failed to retrieve pets" });
//     }

//     res.status(200).json({ pets });
//   });
// });

// // Get a specific pet by ID
// app.get("/mypet/:petId", (req, res) => {
//   const { petId } = req.params;
//   const { userId } = req.query;

//   // Retrieve the specific pet for the logged-in user
//   const getPetQuery = "SELECT * FROM mypet WHERE id = ? AND userId = ?";
//   connection.query(getPetQuery, [petId, userId], (err, pet) => {
//     if (err) {
//       console.error("Error retrieving pet:", err);
//       return res.status(500).json({ error: "Failed to retrieve pet" });
//     }

//     if (pet.length === 0) {
//       // Pet not found or not belonging to the user
//       return res.status(404).json({ error: "Pet not found" });
//     }

//     res.status(200).json({ pet });
//   });
// });

// // Add a new pet for the logged-in user
// app.post("/mypet", (req, res) => {
//   const { userId, name, breed, age, gender, weight, medical } = req.body;

//   // Insert the new pet for the logged-in user
//   const addPetQuery =
//     "INSERT INTO mypet (userId, name, breed, age, gender, weight, medical) VALUES (?, ?, ?, ?, ?, ?, ?)";
//   connection.query(
//     addPetQuery,
//     [userId, name, breed, age, gender, weight, medical],
//     (err, result) => {
//       if (err) {
//         console.error("Error adding pet:", err);
//         return res.status(500).json({ error: "Failed to add pet" });
//       }

//       res.status(200).json({ message: "Pet added successfully" });
//     }
//   );
// });

// // Update a pet by ID for the logged-in user
// app.put("/mypet/:petId", (req, res) => {
//   const { petId } = req.params;
//   const { userId, name, breed, age, gender, weight, medical } = req.body;

//   // Update the pet for the logged-in user
//   const updatePetQuery =
//     "UPDATE mypet SET name = ?, breed = ?, age = ?, gender = ?, weight = ?, medical = ? WHERE id = ? AND userId = ?";
//   connection.query(
//     updatePetQuery,
//     [name, breed, age, gender, weight, medical, petId, userId],
//     (err, result) => {
//       if (err) {
//         console.error("Error updating pet:", err);
//         return res.status(500).json({ error: "Failed to update pet" });
//       }

//       if (result.affectedRows === 0) {
//         // Pet not found or not belonging to the user
//         return res.status(404).json({ error: "Pet not found" });
//       }

//       res.status(200).json({ message: "Pet updated successfully" });
//     }
//   );
// });

// // Delete a pet by ID for the logged-in user
// app.delete("/mypet/:petId", (req, res) => {
//   const { petId } = req.params;
//   const { userId } = req.query;

//   // Delete the pet for the logged-in user
//   const deletePetQuery = "DELETE FROM mypet WHERE id = ? AND userId = ?";
//   connection.query(deletePetQuery, [petId, userId], (err, result) => {
//     if (err) {
//       console.error("Error deleting pet:", err);
//       return res.status(500).json({ error: "Failed to delete pet" });
//     }

//     if (result.affectedRows === 0) {
//       // Pet not found or not belonging to the user
//       return res.status(404).json({ error: "Pet not found" });
//     }

//     res.status(200).json({ message: "Pet deleted successfully" });
//   });
// });

app.listen(port, () => {
  console.log("App is running at port " + port);
});
