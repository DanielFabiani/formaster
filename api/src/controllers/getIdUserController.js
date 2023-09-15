
const { Form } = require("../db");

const getIdUserController = async (id) => {
  
    const searchUserById = await Form.findByPk(id);
    console.log(searchUserById);

    return searchUserById;
  
};

module.exports = getIdUserController;
