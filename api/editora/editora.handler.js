const crud = require("../../crud");

async function buscarEditora() {
  return await crud.get("editora");
}

async function buscarEditoraId(id) {
  return await crud.getById("editora", id);
}

async function create(nome, idEditora) {
  if (idEditora) {
    await crud.salvar("editora", idEditora, { nome });
  } else {
    await crud.salvar("editora", null, { nome });
  }
  return buscarEditora();
}

async function deletar(id) {
  await crud.delete("editora", id);
  return buscarEditora();
}

module.exports = {
  buscarEditora,
  create,
  deletar,
  buscarEditoraId,
};
