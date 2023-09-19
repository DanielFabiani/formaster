const postUserDataController = require("../controllers/postUserDataController");

const postUserDataHandler = async (req, res) => {
  const {
    full_name,
    phone_number,
    start_date,
    preferred_language,
    how_found,
    newsletter_subscription,
  } = req.body;
  if ( !full_name ) {
    return res.status(404).send("Falta enviar datos obligatorios");
  }
  try {
    const postUserData = await postUserDataController(
      full_name,
      phone_number,
      start_date,
      preferred_language,
      how_found,
      newsletter_subscription,
    );
    console.log(postUserData, 'User data creada correctamente')
    res.status(200).json(postUserData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postUserDataHandler;