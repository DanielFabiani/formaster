require("dotenv").config();

const { Form } = require("../db");

const patchUserDataController = async (
  //id,
  full_name,
  phone_number,
  start_date,
  preferred_language,
  how_found,
  newsletter_subscription,
) => {

  if (newsletter_subscription === undefined || newsletter_subscription === "") {
    newsletter_subscription = false;
  }

  //Busca el ultimo form en la base de datos
  const patchUserData = await Form.findOne({
    order: [[ 'id', 'DESC']] // Ordena por id en orden descendente
  });

  //Verifica si se encontró un usuario.
  if (!patchUserData ) {
    console.log('no se encontró el usuario para editar las respuestas');
    return;
  }

  //verifica cada uno de los campos de entrada y actualiza las propiedades correspondientes del objeto patchUserData 
  if (full_name) {
    patchUserData.full_name = full_name;
  }
  if (phone_number) {
    patchUserData.phone_number = phone_number;
  }
  if (start_date) {
    patchUserData.start_date = start_date;
  }
  if (preferred_language) {
    patchUserData.preferred_language = preferred_language;
  }
  if (how_found) {
    patchUserData.how_found = how_found;
  }
  if (newsletter_subscription) {
    patchUserData.newsletter_subscription = newsletter_subscription;
  }

  // Guarda los cambios en la base de datos
  await patchUserData.save();

  return patchUserData;
};
module.exports = patchUserDataController;
