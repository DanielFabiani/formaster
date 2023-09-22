
require("dotenv").config();

const { Form } = require("../db");

const answersFormData = async () => {

  const lastForm = await Form.findOne({
    order: [[ 'id', 'ASC']] // Ordena por id en orden descendente
  });

  if (!lastForm) {
    console.log('No se encontró el formulario');
    return null;
  }

  /* const lastId = await Form.max('id');
    if (lastId !== null) {
      const lastForm = await Form.findByPk(lastId);
      return lastForm;
    }
  console.log(lastId, 'ultimo form guardado');
  return lastId; */
  return lastForm;
}

module.exports = answersFormData;