module.exports = async (req, res) => {
  const { userId, name, breed, age, gender, weight, medical } = req.body;

  // Insert the new pet for the logged-in user
  const addPetQuery =
    "INSERT INTO mypet (userId, name, breed, age, gender, weight, medical) VALUES (?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    addPetQuery,
    [userId, name, breed, age, gender, weight, medical],
    (err, result) => {
      if (err) {
        console.error("Error adding pet:", err);
        return res.status(500).json({ error: "Failed to add pet" });
      }

      res.status(200).json({ message: "Pet added successfully" });
    }
  );
};
