const { addCalculator, getCalculator, deleteCalculator } = require('../controllers/vitccalculator');
const { addSensiCalculator, getSensiCalculator, deleteSensiCalculator } = require('../controllers/sensicalculator');
const { addToleCalculator, getToleCalculator, deleteToleCalculator } = require('../controllers/tolecalculator');


const router = require('express').Router();

router.post('/add-calculator', addCalculator)
        .get('/get-calculator', getCalculator)
        .delete('/delete-calculator/:id', deleteCalculator)
        .post('/add-sensicalculator', addSensiCalculator)
        .get('/get-sensicalculator', getSensiCalculator)
        .delete('/delete-sensicalculator/:id', deleteSensiCalculator)
        .post('/add-tolecalculator', addToleCalculator)
        .get('/get-tolecalculator', getToleCalculator)
        .delete('/delete-tolecalculator/:id', deleteToleCalculator)



module.exports = router;