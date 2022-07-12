const express = require("express");
const router = express.Router();

const editoraHandler = require("./editora.handler");

router.get("/", async (req, res) => {
  res.json(await editoraHandler.buscarEditora());
});

router.get("/:id", async (req, res) => {
  res.json(await editoraHandler.buscarEditoraId(req.params.id));
});

router.post("/", async (req, res) => {
  const { nome } = req.body;
  res.json(await editoraHandler.create(nome));
});

router.post("/", async (req, res) => {
  const { nome, idEditora } = req.body;
  res.json(await editoraHandler.create(nome, idEditora));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await editoraHandler.deletar(id));
});

module.exports = router;
