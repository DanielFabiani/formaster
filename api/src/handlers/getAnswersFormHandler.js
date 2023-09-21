const answersFormData = require("../controllers/getAnswersFormController");


const getAnswersForm = async (req, res) => {
  try {
    const answersData = await answersFormData()
    res.status(200).json(answersData)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = getAnswersForm;