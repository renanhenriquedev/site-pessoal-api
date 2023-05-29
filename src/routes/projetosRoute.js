const express = require('express');

const portfolioController = require('../controllers/portfolioController');

// variavel especifica do express para lidar com as rotas
const router = express.Router();

router.get('/', portfolioController.getPortfolio);
router.get('/:id', portfolioController.getProjetoById);
router.post('/', portfolioController.createProjeto);
router.put('/:id', portfolioController.updateProjeto)
router.delete('/:id', portfolioController.deleteProjeto);

module.exports = router;