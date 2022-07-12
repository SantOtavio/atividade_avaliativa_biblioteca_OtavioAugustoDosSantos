const crud = require("../../crud");

async function buscarAutorLivro() {
  return await crud.get("autorLivro");
}

async function buscarAutorLivroId(id) {
  return await crud.getById("autorLivro", id);
}

async function create(idAutor, idLivro, idAutorLivro) {
  if (idAutorLivro) {
    await crud.save("autorLivro", idAutorLivro, { idAutor, idLivro });
  } else {
    await crud.save("autorLivro", null, { idAutor, idLivro });
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
