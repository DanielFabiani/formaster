const { Form } = require("../db");

const postUserDataController = async (
  full_name,
  phone_number,
  start_date,
  preferred_language,
  how_found,
  newsletter_subscription,
) => {

  // Verifica si newsletter_subscription es undefined o vacío y establece su valor en false
  if (newsletter_subscription === undefined || newsletter_subscription === "") {
    newsletter_subscription = false;
  }
  
  const newUserData = await Form.create({
    full_name,
    phone_number,
    start_date,
    preferred_language,
    how_found,
    newsletter_subscription
  });
  
  return newUserData;
};

module.exports = postUserDataController;