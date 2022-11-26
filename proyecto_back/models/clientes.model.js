//Se declar la dependencia mongoose, para indicar que se esta trabajando con mongoo
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Esquema que se trabaja con usuarios
const ClientesSchema = new Schema({
    nombre:{type: String, required: true, max:60},
    apellido_p:{type:String, required: true, max:40},
    apellido_m:{type:String, required: true, max:40},
    telefono:{type: String, required: true, max:15},
    mail:{type: String, required: false, max:70},
    direccion: {type:String, required: false, max:150}
});

module.exports = mongoose.model("clientes", ClientesSchema);
