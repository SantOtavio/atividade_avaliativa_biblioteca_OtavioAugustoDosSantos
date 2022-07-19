const express = require("express");
const router = express.Router();

const locacaoLivroHandler = require("./locacaoLivro.handler");

router.get("/", async (req, res) => {
  res.json(await locacaoLivroHandler.buscarLocacaoLivro());
});

router.get("/:id", async (req, res) => {
  res.json(await locacaoLivroHandler.buscarLocacaoLivroId(req.params.id));
});

router.post("/", async (req, res) => {
  const { idLocacao, idLivro } = req.body;
  res.json(await locacaoLivroHandler.create(idLocacao, idLivro));
});

router.post("/", async (req, res) => {
  const { idLocacao, idLivro, idLocacaoLivro } = req.body;
  res.json(
    await locacaoLivroHandler.create(idLocacao, idLivro, idLocacaoLivro)
  );
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await locacaoLivroHandler.deletar(id));
});

module.exports = router;
