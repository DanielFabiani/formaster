
require("dotenv").config();

const { Form } = require("../db");

const answersFormData = async () => {

  const lastForm = await Form.findOne({
    order: [['id', 'ASC']] // Ordena por id en orden descendente
  });
  
  let nextId;
  
  if (!lastForm) {
    // Si no se encontró ningún formulario, asigna el ID 1 como el siguiente
    nextId = 1;
  } else {
    // Calcula el siguiente ID como el último ID + 1
    nextId = lastForm.id + 1;
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