const { Form } = require("../db");

const postUserDataController = async (
  name,
  phoneNumber,
  startDate,
  preferredLanguage,
  howFound,
  newsletterSubscription,
) => {
  
  const newUserData = await Form.create({
    name,
    phoneNumber,
    startDate,
    preferredLanguage,
    howFound,
    newsletterSubscription,
  });
  
  return newUserData;
};

module.exports = postUserDataController;