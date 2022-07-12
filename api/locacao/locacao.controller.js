const express = require("express");
const router = express.Router();

const locacaoHandler = require("./locacao.handler");

router.get("/", async (req, res) => {
  res.json(await locacaoHandler.buscarLocacao());
});

router.get("/:id", async (req, res) => {
  res.json(await locacaoHandler.buscarLocacaoId(req.params.id));
});

router.post("/", async (req, res) => {
  const { idCliente, dataLocacao, dataDevolucao, livros } = req.body;
  res.json(await locacaoHandler.create(idCliente, dataLocacao, dataDevolucao, livros));
});

router.post("/", async (req, res) => {
  const { idCliente, dataLocacao, dataDevolucao, idLocacao } = req.body;
  res.json(
    await locacaoHandler.create(
      idCliente,
      dataLocacao,
      dataDevolucao,
      idLocacao
    )
  );
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await locacaoHandler.deletar(id));
});

module.exports = router;
