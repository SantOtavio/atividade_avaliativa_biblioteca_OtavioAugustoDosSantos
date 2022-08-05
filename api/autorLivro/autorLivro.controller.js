const express = require("express");
const router = express.Router();

const autorLivroHandler = require("./autorLivro.handler");

router.get("/", async (req, res) => {
  res.json(await autorLivroHandler.buscarAutorLivro());
});

router.get("/:id", async (req, res) => {
  res.json(await autorLivroHandler.buscarAutorLivroId(req.params.id));
});

router.post("/", async (req, res) => {
  const { idAutor, idLivro } = req.body;
  res.json(await autorLivroHandler.create(idAutor, idLivro));
});

router.put("/", async (req, res) => {
  const { idAutorLivro, idAutor, idLivro } = req.body;
  res.json(await autorLivroHandler.create(idAutor, idLivro, idAutorLivro));
}
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await autorLivroHandler.deletar(id));
});

module.exports = router;
