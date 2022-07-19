const express = require("express");
const router = express.Router();

const autor = require("./api/autor/autor.controller");
const livro = require("./api/livro/livro.controller");
const autorLivro = require("./api/autorLivro/autorLivro.controller");
const editora = require("./api/editora/editora.controller");
const cliente = require("./api/cliente/cliente.controller");
const locacao = require("./api/locacao/locacao.controller");
const locacaoLivro = require("./api/locacaoLivro/locacaoLivro.controller");

router.use("/autor", autor);
router.use("/livro", livro);
router.use("/autorLivro", autorLivro);
router.use("/editora", editora);
router.use("/cliente", cliente);
router.use("/locacao", locacao);
router.use("/locacaoLivro", locacaoLivro);

module.exports = router;
