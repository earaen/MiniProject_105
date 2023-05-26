// Delete a pet by ID for the logged-in user
module.exports = async (req, res) => {
  const { petId } = req.params;
  const { userId } = req.query;

  // Delete the pet for the logged-in user
  const deletePetQuery = "DELETE FROM mypet WHERE id = ? AND userId = ?";
  connection.query(deletePetQuery, [petId, userId], (err, result) => {
    if (err) {
      console.error("Error deleting pet:", err);
      return res.status(500).json({ error: "Failed to delete pet" });
    }

    if (result.affectedRows === 0) {
      // Pet not found or not belonging to the user
      return res.status(404).json({ error: "Pet not found" });
    }

    res.status(200).json({ message: "Pet deleted successfully" });
  });
};
