const crud = require("../../crud");

async function buscarAutorLivro() {
  return await crud.get("livroAutor");
}

async function buscarAutorLivroId(id) {
  return await crud.getById("autorLivro", id);
}

async function create(idAutor, idLivro, idAutorLivro) {
  if (idAutorLivro) {
    await crud.salvar("autorLivro", idAutorLivro, { idAutor, idLivro });
  } else {
    await crud.salvar("autorLivro", null, { idAutor, idLivro });
  }
  return buscarAutorLivro();
}

async function deletar(id) {
  await crud.delete("autorLivro", id);
  return buscarAutorLivro();
}

module.exports = {
  buscarAutorLivro,
  buscarAutorLivroId,
  create,
  deletar,
};
