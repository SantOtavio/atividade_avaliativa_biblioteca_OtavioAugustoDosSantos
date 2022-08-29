const crud = require("../../crud");
autorLivro = require("../autorLivro/autorLivro.handler");

async function buscarLivro() {
  return await crud.get("livro");
}

async function buscarLivroId(id) {
  return await crud.getById("livro", id);
}

async function create(titulo, categoria, autores, statusLocacao, idEditora, idLivro) {
  console.log("entrou");
  if (idLivro != null) {
    console.log("entrou if errado");
    await crud.salvar("livro", idLivro, {
      titulo,
      categoria,
      statusLocacao,
      idEditora,
    });
  } else if (idLivro == null) {
    console.log("entrou");
    const livro = await crud.salvar("livro", null, {
      titulo,
      categoria,
      statusLocacao,
      idEditora,
    });

    for (let i = 0; i < autores.length; i++) {
      console.log("entrou");
      autorLivro.create(autores[i], livro.id, null);
    }
  }
  return buscarLivro();
}

async function deletar(id) {
  await crud.delete("livro", id);
  return buscarLivro();
}

module.exports = {
  buscarLivro,
  create,
  deletar,
  buscarLivroId,
};
