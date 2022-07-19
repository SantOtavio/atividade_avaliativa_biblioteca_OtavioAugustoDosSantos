const express = require("express");
const router = express.Router();

const livroHandler = require("./livro.handler");

router.get("/", async (req, res) => {
  res.json(await livroHandler.buscarLivro());
});

router.get("/:id", async (req, res) => {
  res.json(await livroHandler.buscarLivroId(req.params.id));
});

router.post("/", async (req, res) => {
  const { titulo, categoria, autores, statusLocacao, idEditora } = req.body;
  res.json(
    await livroHandler.create(
      titulo,
      categoria,
      autores,
      statusLocacao,
      idEditora
    )
  );
});

router.post("/", async (req, res) => {
  const { titulo, categoria, statusLocacao, idLivro } = req.body;
  res.json(
    await livroHandler.create(titulo, categoria, statusLocacao, idLivro)
  );
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await livroHandler.deletar(id));
});

module.exports = router;
