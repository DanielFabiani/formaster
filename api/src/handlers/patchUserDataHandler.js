const patchUserDataController = require("../controllers/patchUserDataController");

const patchUserDataHandler = async (req, res) => {
  //const { id }= req.params;
  const {
    full_name,
    phone_number,
    start_date,
    preferred_language,
    how_found,
    newsletter_subscription,
  } = req.body;
  
  try {
    const patchUserData = await patchUserDataController(
      //id,
      full_name,
      phone_number,
      start_date,
      preferred_language,
      how_found,
      newsletter_subscription,
    );
    console.log(patchUserData, 'usuario actualizado correctamente');
    res.status(200).json(patchUserData)
  }
  catch (error) {
    res.status(404).json({error: error.message})
  }
};


module.exports = patchUserDataHandler;