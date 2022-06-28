const express = require("express");
const router = express.Router();

const autor = require("./api/autor/autor.controller");


router.use("/autores" , autor);

module.exports = router;