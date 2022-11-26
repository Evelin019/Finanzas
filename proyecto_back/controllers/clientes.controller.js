const Cliente = require("../models/clientes.model");
let response = {
    msg: "",
    exito: false
}

//Crear un nuevo usuario
exports.create = function(req, res){
    let cliente = new Cliente({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    cliente.save(function(err){
        if(err){
            console.error=(err),
            response.exito = false,
            response.msg = "Error al guardar el usuario"
            res.json(response)
            return;
        }
    
        response.exito = true,
        response.msg = "El usuario se guardo correctamente"
        res.json(response)
    })
}

//Buscar
exports.find = function(req, res){
    Cliente.find(function(err, clientes){
        res.json(clientes)
    })
}

exports.findOne = function(req, res){
    Cliente.findOne({_id: req.params.id}, function(err, clientes){
        res.json(clientes)
    })
}

//Actualizar
exports.update = function(req, res){
    let cliente =({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    Cliente.findByIdAndUpdate(req.params.id, {$set:cliente}, function(err){
        if(err){
            console.error=(err),
            response.exito = false,
            response.msg = "Error al actualizar el usuario"
            res.json(response)
            return;
        }
    
        response.exito = true,
        response.msg = "El usuario se actualizo correctamente"
        res.json(response)
    })
}

//Eliminar
exports.remove = function(req, res){
    
    Cliente.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error=(err),
            response.exito = false,
            response.msg = "Error al eliminar el usuario"
            res.json(response)
            return;
        }
    
        response.exito = true,
        response.msg = "El usuario se elimino correctamente"
        res.json(response)
    })
}

//ruteador, como se puede enlazar