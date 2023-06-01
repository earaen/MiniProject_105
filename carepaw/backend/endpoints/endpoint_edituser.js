module.exports = async (req, res) => {
  const userId = req.params.userId;
  const { username, email } = req.body;

  try {
    // Query the database to update user information
    const query = "UPDATE users SET username = ?, email = ? WHERE id = ?";
    await connection.promise().query(query, [username, email, userId]);

    // Retrieve the updated user information
    const updatedQuery = "SELECT * FROM users WHERE id = ?";
    const [updatedUser] = await connection
      .promise()
      .query(updatedQuery, [userId]);

    if (updatedUser.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Extract the relevant user information
    const {
      id,
      username: updatedUsername,
      email: updatedEmail,
    } = updatedUser[0];

    res.json({ id, username: updatedUsername, email: updatedEmail });
  } catch (error) {
    console.error("Error updating user information:", error);
    res.status(500).json({ error: "Failed to update user information" });
  }
};
