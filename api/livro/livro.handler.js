const crud = require("../../crud");

async function buscarLivro() {
  return await crud.get("livro");
}

async function buscarLivroId(id) {
  return await crud.getById("livro", id);
}

async function create(titulo, categoria, autores, statusLocacao, idLivro) {
  if (idLivro) {
    await crud.save("livro", idLivro, {
      titulo,
      categoria,
      statusLocacao,
    });
  } else {
    const livro = await crud.save("livro", null, {
      titulo,
      categoria,
      statusLocacao,
    });

    for (let i = 0; i < autores.length; i++) {
      await crud.save("livroAutor", null, {
        idLivro: livro.id,
        idAutor: autores[i],
      });
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
