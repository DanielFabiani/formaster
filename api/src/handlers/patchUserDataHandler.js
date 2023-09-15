const patchUserDataController = require("../controllers/patchUserDataController");

const patchUserDataHandler = async (req, res) => {
  const { id }= req.params;
  const {
    name,
    phoneNumber,
    startDate,
    preferredLanguage,
    howFound,
    newsletterSubscription,
  } = req.body;
  
  try {
    const patchUserData = await patchUserDataController(
      id,
      name,
      phoneNumber,
      startDate,
      preferredLanguage,
      howFound,
      newsletterSubscription,
    );
    console.log(patchUserData, 'usuario actualizado correctamente');
    res.status(200).json(patchUserData)
  }
  catch (error) {
    res.status(404).json({error: error.message})
  }
};


module.exports = patchUserDataHandler;