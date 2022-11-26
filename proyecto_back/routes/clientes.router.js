//Crear las rutas
const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientes.controller");

//router.post("/login", usuariosController.login)//Envio de datos, permite crear un usuario
router.post("/", clientesController.create)
router.get("/", clientesController.find)//Obtener un usuario (buscar)
router.get("/:id", clientesController.findOne)
router.put("/:id", clientesController.update)
router.delete("/:id", clientesController.remove)


module.exports = router

