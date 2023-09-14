const { allFormData }= require("../controllers/allFormDataController");

const getAllFormData = async (req, res) => {
  try {
    const formData = await allFormData()
    res.status(200).json(formData)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports =  getAllFormData; 
