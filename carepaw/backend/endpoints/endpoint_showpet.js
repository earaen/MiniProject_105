module.exports = async (req, res) => {
  const { userId } = req.query;

  // Retrieve all pets for the logged-in user
  const getPetsQuery = "SELECT * FROM mypet WHERE userId = ?";
  connection.query(getPetsQuery, [userId], (err, pets) => {
    if (err) {
      console.error("Error retrieving pets:", err);
      return res.status(500).json({ error: "Failed to retrieve pets" });
    }

    res.status(200).json({ pets });
  });
};
