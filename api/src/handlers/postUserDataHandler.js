const postUserDataController = require("../controllers/postUserDataController");

const postUserDataHandler = async (req, res) => {
  const {
    name,
    phoneNumber,
    startDate,
    preferredLanguage,
    howFound,
    newsletterSubscription,
  } = req.body;
  if ( !name ) {
    return res.status(404).send("Falta enviar datos obligatorios");
  }
  try {
    const postUserData = await postUserDataController(
      name,
      phoneNumber,
      startDate,
      preferredLanguage,
      howFound,
      newsletterSubscription,
    );
    console.log(postUserData, 'User data creada correctamente')
    res.status(200).json(postUserData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postUserDataHandler;