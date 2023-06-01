module.exports = async (req, res) => {
  const userId = req.params.userId;

  try {
    // Query the database to retrieve user information
    const query = "SELECT * FROM users WHERE id = ?";
    const [user] = await connection.promise().query(query, [userId]);

    if (user.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Extract the relevant user information
    const { id, username, email } = user[0];

    res.json({ id, username, email });
  } catch (error) {
    console.error("Error retrieving user information:", error);
    res.status(500).json({ error: "Failed to retrieve user information" });
  }
};
