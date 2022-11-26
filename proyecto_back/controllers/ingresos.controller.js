const Ingreso = require("../models/ingresos.model");
let response = {
    msg: "",
    exito: false
}

//Crear un nuevo usuario
exports.create = function(req, res){
    let ingreso = new Ingreso({
        valor_Ingreso: req.body.valor_Ingreso,
        fecha_Ingreso: req.body.fecha_Ingreso,
        categoria_Ingreso: req.body.categoria_Ingreso,
        repetir_Ingreso: req.body.repetir_Ingreso,
        descripcion_Ingreso: req.body.descripcion_Ingreso,
        adicional_Ingreso: req.body.adicional_Ingreso
    })

    ingreso.save(function(err){
        if(err){
            console.error=(err),
            response.exito = false,
            response.msg = "Error al guardar el ingreso"
            res.json(response)
            return;
        }
    
        response.exito = true,
        response.msg = "El ingreso se guardo correctamente"
        res.json(response)
    })
}

//Buscar
exports.find = function(req, res){
    Ingreso.find(function(err, ingresos){
        res.json(ingresos)
    })
}

exports.findOne = function(req, res){
    Ingreso.findOne({_id: req.params.id}, function(err, ingresos){
        res.json(ingresos)
    })
}

//Actualizar
exports.update = function(req, res){
    let ingreso =({
        valor_Ingreso: req.body.valor_Ingreso,
        fecha_Ingreso: req.body.fecha_Ingreso,
        categoria_Ingreso: req.body.categoria_Ingreso,
        repetir_Ingreso: req.body.repetir_Ingreso,
        descripcion_Ingreso: req.body.descripcion_Ingreso,
        adicional_Ingreso: req.body.adicional_Ingreso
    })

    Ingreso.findByIdAndUpdate(req.params.id, {$set:ingreso}, function(err){
        if(err){
            console.error=(err),
            response.exito = false,
            response.msg = "Error al actualizar el ingreso"
            res.json(response)
            return;
        }
    
        response.exito = true,
        response.msg = "El ingreso se actualizo correctamente"
        res.json(response)
    })
}

//Eliminar
exports.remove = function(req, res){
    
    Ingreso.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error=(err),
            response.exito = false,
            response.msg = "Error al eliminar el ingreso"
            res.json(response)
            return;
        }
    
        response.exito = true,
        response.msg = "El ingreso se elimino correctamente"
        res.json(response)
    })
}

//ruteador, como se puede enlazar