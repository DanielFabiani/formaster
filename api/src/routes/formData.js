const { Router } = require('express');
const getAllFormData = require('../handlers/allFormDataHandler');
const getIdUserForm = require('../handlers/getIdUserHandler');
const postUserData = require('../handlers/postUserDataHandler');
const patchUserDataHandler = require('../handlers/patchUserDataHandler');


const gamesRoutes = Router();

//Rutas
gamesRoutes.get('/', getAllFormData)
gamesRoutes.get('/:id', getIdUserForm)
gamesRoutes.patch('/:id', patchUserDataHandler)
gamesRoutes.post('/', postUserData) // primero hago el post para tener que buscar por id


module.exports = gamesRoutes;