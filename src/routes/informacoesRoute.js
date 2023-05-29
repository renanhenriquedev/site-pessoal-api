const express = require('express');

const informacoesController = require('../controllers/informacoesController');

// variavel especifica do express para lidar com as rotas
const router = express.Router();

router.get('/:id', informacoesController.getInformacoes);
router.post('/', informacoesController.createInformacoes);
router.delete('/:id', informacoesController.deleteInformacoes);
router.put('/1', informacoesController.updateInformacoes);


module.exports = router;