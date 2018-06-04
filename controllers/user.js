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
		bcrypt.hash(params.password, null, null, function(err, hash){
			user.password = hash;
			if(user.name != null && user.surname != null && user.email != null){
				/**
				 * Guardar usuario en la BD
				 */
				user.save((err, userStored) => {
					if(err){
						res.status(500).send({ message: 'Error al guardar el usuario' });
					}else{
						if(!userStored){
							res.status(404).send({ message: 'El usuario no ha sido registrado' });
						}else{
							res.status(200).send({ user: userStored });
						}
					}
				});
			}else{
				res.status(200).send({ message: 'Debes llenar todos los campos' });
			}
		});
	}else{
		res.status(200).send({ message: 'Introduce un password!' });
	}
}

module.exports = {
    pruebas,
    saveUser
};