//Verificar si el token tiene permisos
const jwt= require("jsonwebtoken")

//Determinar su hay un proceso de autorizacion para que el usuario pueda acceder a la informacion
const auth = (req, res, next) => {
    try{
        //Se verifica si el token tiene o no tiene permiso
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "__recret__")
        req.usuario = decoded
        next()
    } catch(error){
        res.status(401)//Si funciono el token pero no coincide con la base de datos 
        res.json({code:4, msg:"No tienes permiso para acceder"})
    }
}

module.exports = auth