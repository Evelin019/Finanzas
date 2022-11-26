//Se declar la dependencia mongoose, para indicar que se esta trabajando con mongoo
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Esquema que se trabaja con usuarios
const IngresosSchema = new Schema({
    valor_Ingreso:{type:Number, required: true, max:100},
    fecha_Ingreso:{type:String, required: true, max:100},
    categoria_Ingreso:{type:String, required: true, max:100},
    repetir_Ingreso:{type: String, required: true, max:100},
    descripcion_Ingreso:{type: String, required: false, max:100},
    adicional_Ingreso: {type:String, required: false, max:100}
});

module.exports = mongoose.model("ingresos", IngresosSchema);
