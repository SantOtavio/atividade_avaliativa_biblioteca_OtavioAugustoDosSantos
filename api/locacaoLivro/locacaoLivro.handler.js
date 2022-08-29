const crud = require("../../crud");
const livros = require("../livro/livro.handler");
const locacao = require("../locacao/locacao.handler");

async function buscarLocacaoLivro() {
  return await crud.get("locacaoLivro");
}

async function buscarLocacaoLivroId(id) {
  return await crud.getById("locacaoLivro", id);
}

async function deletar(id) {
  const locacaoLivro = await crud.getById("locacaoLivro", id);
  const livro = await crud.get("livro", locacaoLivro.idLivro);
  await crud.salvar("livro", locacaoLivro.idLivro, {
    statusLocacao: "nlocado",
  });
  await crud.delete("locacaoLivro", id);
  return buscarLocacaoLivro();
}

async function locarLivro(arrLivros, idLocacao) {
  for (let i = 0; i < arrLivros.length; i++) {
    const livro = await crud.get("livro", arrLivros[i]);
    if (livro.statusLocacao === "nlocado") {
      await crud.salvar("locacaoLivro", null, {
        idLocacao,
        idLivro: arrLivros[i],
      });
      await crud.salvar("livro", arrLivros[i], {
        statusLocacao: "locado",
      });
    } else {
      throw new Error("Livro não está disponível");
    }
  }
  return buscarLocacaoLivro();
}


module.exports = {
  buscarLocacaoLivro,
  deletar,
  buscarLocacaoLivroId,
  locarLivro,
};
