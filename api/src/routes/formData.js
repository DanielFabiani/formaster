const { Router } = require('express');
const getAllFormData = require('../handlers/allFormDataHandler');
const getIdUserForm = require('../handlers/idUserFormHandler');
const postUserData = require('../handlers/postUserDataHandler');
//const putUserData = require('../handlers/postUserDataHandler');
const patchUserData = require('../handlers/postUserDataHandler');

const gamesRoutes = Router();

//Rutas
gamesRoutes.get('/', getAllFormData)
gamesRoutes.get('/:id', getIdUserForm)
gamesRoutes.post('/', postUserData) // primero hago el post para tener que buscar por id
gamesRoutes.patch('/', patchUserData)


module.exports = gamesRoutes;