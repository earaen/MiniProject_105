const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email is already used
    const checkEmailQuery = `SELECT * FROM users WHERE email = ?`;
    connection.query(checkEmailQuery, [email], async (err, rows) => {
      if (err) {
        console.error("Error checking email:", err);
        return res.status(500).json({ error: "Failed to check email" });
      }

      if (rows.length > 0) {
        // Email is already used
        return res.status(400).json({ error: "Email already used" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Save user details to the database
      const insertUserQuery = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
      connection.query(
        insertUserQuery,
        [username, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.error("Error saving user:", err);
            return res.status(500).json({ error: "Failed to save user" });
          }

          // Generate JWT token
          const token = jwt.sign({ username, email }, "ZJGX1QL7ri6BGJWj3t", {
            expiresIn: "1h",
          });

          res.status(200).json({ token, message: "Login successful" });
        }
      );
    });
  } catch (error) {
    console.error("Error hashing password:", error);
    res.status(500).json({ error: "Failed to hash password" });
  }
};
