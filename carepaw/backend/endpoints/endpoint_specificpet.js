module.exports = async (req, res) => {
  try {
    const { petId } = req.params;
    const { userId } = req.query;

    // Retrieve the specific pet for the logged-in user
    const getPetQuery = "SELECT * FROM mypet WHERE id = ? AND userId = ?";
    connection.query(getPetQuery, [petId, userId], (err, results) => {
      if (err) {
        console.error("Error retrieving pet:", err);
        return res.status(500).json({ error: "Failed to retrieve pet" });
      }

      if (results.length === 0) {
      
        // No pet found with the given ID for the logged-in user
        return res.status(404).json({ error: "Pet not found" });
      }

      const pet = results[0];
      res.json(pet);
    });
  } catch (error) {
    console.error("Error in getPet:", error);
    res.status(500).json({ error: "Server error" });
  }
};
