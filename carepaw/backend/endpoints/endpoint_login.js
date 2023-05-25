const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists with the provided email
    const checkUserQuery = "SELECT * FROM users WHERE email = ?";
    connection.query(checkUserQuery, [email], async (err, rows) => {
      if (err) {
        console.error("Error checking user:", err);
        return res.status(500).json({ error: "Failed to check user" });
      }

      if (rows.length === 0) {
        // User does not exist
        return res.status(400).json({ error: "Invalid email or password" });
      }

      const user = rows[0];

      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        // Invalid password
        return res.status(400).json({ error: "Invalid email or password" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { username: user.username, email },
        "ZJGX1QL7ri6BGJWj3t",
        {
          expiresIn: "1h",
        }
      );

      // Send the token, user ID, and other user information in the response
      res
        .status(200)
        .json({ token, userId: user.id, user, message: "Login successful" });
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Failed to log in" });
  }
};
