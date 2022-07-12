const express = require("express");
const router = express.Router();

const clienteHandler = require("./cliente.handler");

router.get("/", async (req, res) => {
  res.json(await clienteHandler.buscarEditora());
});

router.get("/:id", async (req, res) => {
  res.json(await clienteHandler.buscarEditoraId(req.params.id));
});

router.post("/", async (req, res) => {
  const { cpf, nome, email } = req.body;
  res.json(await clienteHandler.create(cpf, nome, email));
});

router.post("/", async (req, res) => {
  const { cpf, nome, email, idCliente } = req.body;
  res.json(await clienteHandler.create(cpf, nome, email, idCliente));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await clienteHandler.deletar(id));
});

module.exports = router;
