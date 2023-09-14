const { Router } = require('express');
const formDataRoutes = require('./formData');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/formData', formDataRoutes)


module.exports = router;
