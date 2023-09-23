const { Router } = require('express');
const getAllFormData = require('../handlers/allFormDataHandler');
//const getIdUserForm = require('../handlers/getIdUserHandler');
const postUserData = require('../handlers/postUserDataHandler');
const patchUserDataHandler = require('../handlers/patchUserDataHandler');
const getAnswersForm = require('../handlers/getAnswersFormHandler');


const gamesRoutes = Router();

//Rutas
gamesRoutes.get('/', getAllFormData)
gamesRoutes.get('/answers', getAnswersForm)
//gamesRoutes.get('/:id', getIdUserForm)
gamesRoutes.post('/', postUserData) // primero hago el post para tener que buscar por id
gamesRoutes.patch('/', patchUserDataHandler)

module.exports = gamesRoutes;