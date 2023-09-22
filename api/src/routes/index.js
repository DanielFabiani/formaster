const { Router } = require('express');
const formDataRoutes = require('./formData');


const router = Router();

router.use('/formData', formDataRoutes)


module.exports = router;
