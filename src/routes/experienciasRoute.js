    const express = require('express');

    const experienciasController = require('../controllers/experienciasController');

    // variavel especifica do express para lidar com as rotas
    const router = express.Router();

    router.get('/', experienciasController.getAllExperiencias);
    router.get('/:id', experienciasController.getExperienciaById);
    router.post('/', experienciasController.createExperiencia);
    router.put('/:id', experienciasController.updateExperiencia)
    router.delete('/:id', experienciasController.deleteExperiencia);

    module.exports = router;