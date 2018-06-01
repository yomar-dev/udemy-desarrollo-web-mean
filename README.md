# UDEMY - Curso de Desarrollo web con MEAN

A lo largo del curso se desarrollará una aplicación llamada **Mini Spotify**.


### Entidades:

**USER:** _id, name, surname, email, password, role, image. <br>
**ARTIST:** _id, name, description, image. <br>
**ALBUM:** _id, title, description, year, image, artist. <br>
**SONG:** _id, number, name, duration, file, album <br>

### Dependencias:

**Express:** `npm install express --save` <br>
**BCrypt:** `npm install bcrypt-nodejs --save` <br>
**Body Parse:** `npm install body-parser --save` <br>
**Connect Multiparty:** `npm install connect-multiparty --save` <br>
**JWT Simple:** `npm install jwt-simple --save`<br>
**Moments JS:** `npm install moment --save` <br>
**Mongoose:** `npm install mongoose --save`<br>
**Mongoose Pagination:** `npm intall mongoose-pagination` <br>
**Node Mon:** `npm install nodemon --save-dev` <br>

### Eliminar Dependencias:

**Eliminar Mongoose:** `npm uninstall mongoose --save` <br>


### MongoDB:

**Usar una BD:** <br>
`use curso_mean2;`

**Insertar un registro:** <br>
`db.artists.save<<name: 'Dellafuente', description: 'Musica Trap Folklorica', image: 'null'>>;`

**Consultar los registros de una entidad:** <br>
`db.artists.find()`

**Mostrar todas las BD:** <br>
`show dbs`


<br><br>

### Notas:

Necesario para que Body Parser funcione: `app.use(bodyParser.urlencoded({extended: false}));` <br>
Convertir a JSON las peticiones que nos lleguen: `app.use(bodyParser.json());` <br>

Acceder a ruta de prueba: `http://localhost:3977/hello` <br>



<br><br><br>

### Enlaces de interes

[Cygwin - Emular de Terminal Linux para Windows](https://www.cygwin.com/)