//Se declar la dependencia mongoose, para indicar que se esta trabajando con mongoo
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Esquema que se trabaja con usuarios
const UsuariosSchema = new Schema({
    usuario:{type: String, required: true, max:100},
    pass:{type:String, required: true, max:128}//contraseña
});

module.exports = mongoose.model("usuarios", UsuariosSchema);
