const getIdUserController = require("../controllers/getIdUserController");


const getIdUserHandler = async (req, res) => {
  const { id }= req.params;
  console.log(id);
  try {
      const getIdUser = await getIdUserController(id)
      res.status(200).json(getIdUser)
    }
  catch (error) {
    res.status(404).json({error: error.message})
  }
};


module.exports = getIdUserHandler;