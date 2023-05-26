// Update a pet by ID for the logged-in user
module.exports = async (req, res) => {
  const { petId } = req.params;
  const { userId, name, breed, age, gender, weight, medical } = req.body;

  // Update the pet for the logged-in user
  const updatePetQuery =
    "UPDATE mypet SET name = ?, breed = ?, age = ?, gender = ?, weight = ?, medical = ? WHERE id = ? AND userId = ?";
  connection.query(
    updatePetQuery,
    [name, breed, age, gender, weight, medical, petId, userId],
    (err, result) => {
      if (err) {
        console.error("Error updating pet:", err);
        return res.status(500).json({ error: "Failed to update pet" });
      }

      if (result.affectedRows === 0) {
        // Pet not found or not belonging to the user
        return res.status(404).json({ error: "Pet not found" });
      }

      res.status(200).json({ message: "Pet updated successfully" });
    }
  );
};
