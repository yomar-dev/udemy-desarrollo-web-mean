'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var jwt = require('../services/jwt');

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

function loginUser(req, res){
	var params = req.body;

	var email = params.email;
	var password = params.password;

	User.findOne({ email: email.toLowerCase() }, (err, user) => {
		if(err){
			res.status(500).send({ message: 'Error en la petición' })
		}else{
			if(!user){
				res.status(404).send({ message: 'El usuario no existe' });
			}else{
				/**
				 * Verificar el password
				 */
				bcrypt.compare(password, user.password, function(err, check){
					if(check){
						/**
						 * Devolver los datos del usuario logueado
						 */
						if(params.gethash){
							/**
							 * Devolver un token de JWT
							 */
							res.status(200).send({
								token: jwt.createToken(user)
							});
						}else{
							res.status(200).send({ user });
						}
					}else{
						res.status(404).send({ message: 'Problemas al iniciar sesión' });
					}
				});
			}
		}
	})
}

module.exports = {
    pruebas,
    saveUser,
    loginUser
};