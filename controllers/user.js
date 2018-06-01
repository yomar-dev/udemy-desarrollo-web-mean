'use strict'

function pruebas(req, res){
    res.status(200).send({
        message: 'Probando una acción del controlador de Usuario con Node y MongoDB.'
    });
}

module.exports = {
    pruebas
};