//Autenticacion de usuario
//Antes se instala la tecnologia jwt -> para trabajar en json con jsonwebtoken
const Usuario = require("../models/usuarios.model");
const crypto = require("crypto")
const jwt = require("jsonwebtoken");

exports.login = function(req, res, next){
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    //Buscar al usuario y que haya coherencia 
    //hashdpass: Encriptar un codigo
    Usuario.findOne({usuario: req.body.usuario, pass:hashedpass}, function(err, usuario){
        let response = {
            token:null
        }
        //Si el usuario no es nulo, entonces se inicia sesión
        if(usuario != null){
            response.token = jwt.sign({
                id: usuario._id,
                usuario: usuario.usuario
            }, "__recret__"),//Si el usuario no es nulo, entonces se inicia sesión
            {expiresIn: '12h'}//Si el usuario no es nulo, entonces se inicia sesión
        }
        res.json(response);
    })
}
