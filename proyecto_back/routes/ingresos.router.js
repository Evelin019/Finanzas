//Crear las rutas
const express = require("express");
const router = express.Router();
const ingresosController = require("../controllers/ingresos.controller");

router.post("/", ingresosController.create)//Envio de datos, permite crear un ingreso
router.get("/", ingresosController.find)//Obtener un ingreso (buscar)
router.get("/:id", ingresosController.findOne)
router.put("/:id", ingresosController.update)
router.delete("/:id", ingresosController.remove)


module.exports = router

