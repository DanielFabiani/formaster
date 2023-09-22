//const axios = require("axios");
require("dotenv").config();
const path = require("path");
const fs = require("fs");

const { Form } = require("../db");

//GET | cargo en la DB todo el formulario del json
const allFormData = async () => {
  const items = await Form.findAll();
  /* if (items.length) {
    console.log("ya hay items para el formulario");
    return;
  } */

  const createItems = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/Form.json"))
  );

  // creo el objeto que voy a devolver cada propiedad name del json
  const formData = createItems.items.map((item) => {
    const extractedData = {
      type: item.type === "tel" ? "number" : item.type,
      label: item.label,
      name: item.name,
      required: item.required || false,
    };

    if (item.options) {
      extractedData.options = item.options.map((option) => {
        return {
          value: option.value,
          label: option.label,
        };
      });
    }

    return extractedData;
  });

  console.log(formData, "items cargados");
  return formData;
};

module.exports = { allFormData };
