require("dotenv").config();

const { Form } = require("../db");

const patchUserDataController = async (
  id,
  name,
  phoneNumber,
  startDate,
  preferredLanguage,
  howFound,
  newsletterSubscription
) => {

  //Busca el usuario en la base de datos
  const patchUserData = await Form.findByPk(id);

  //Verifica si se encontró un usuario.
  if (!patchUserData ) {
    console.log('no se encontró el usuario para editar las respuestas');
    return;
  }

  //verifica cada uno de los campos de entrada y actualiza las propiedades correspondientes del objeto patchUserData 
  if (name) {
    patchUserData.name = name;
  }
  if (phoneNumber) {
    patchUserData.phoneNumber = phoneNumber;
  }
  if (startDate) {
    patchUserData.startDate = startDate;
  }
  if (preferredLanguage) {
    patchUserData.preferredLanguage = preferredLanguage;
  }
  if (howFound) {
    patchUserData.howFound = howFound;
  }
  if (newsletterSubscription) {
    patchUserData.newsletterSubscription = newsletterSubscription;
  }

  // Guarda los cambios en la base de datos
  await patchUserData.save();

  return patchUserData;
};
module.exports = patchUserDataController;
