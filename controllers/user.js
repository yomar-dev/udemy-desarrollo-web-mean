'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');

function pruebas(req, res){
    res.status(200).send({
        message: 'Probando una acción del controlador de Usuario con Node y MongoDB.'
    });
}

function saveUser(req, res){
	var user = new User();
	var params = req.body;

	console.log(params);

	user.name = params.name;
	user.surname = params.surname;
	user.email = params.email;
	user.role = 'ROLE_USER';
	user.image = 'null';

	if(params.password){
		/**
		 * Encriptar el password
		 */
	}else{
		res.status(500).send({ message: 'Introduce un password!' })
	}
}

module.exports = {
    pruebas,
    saveUser
};