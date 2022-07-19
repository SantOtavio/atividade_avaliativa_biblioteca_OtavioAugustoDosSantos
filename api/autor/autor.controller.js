const express = require("express");
const router = express.Router();

const autorHandler = require("./autor.handler");

router.get("/", async (req, res) => {
  res.json(await autorHandler.buscarAutorId());
});

router.get("/:id", async (req, res) => {
  res.json(await autorHandler.buscarAutorId(req.params.id));
});

router.post("/", async (req, res) => {
  const { nome, sobrenome } = req.body;
  res.json(await autorHandler.create(nome, sobrenome));
});

router.put("/:id", async (req, res) => {
  const { nome, sobrenome} = req.body;
  res.json(await autorHandler.create(nome, sobrenome, req.params.id));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await autorHandler.deletar(id));
});

module.exports = router;
