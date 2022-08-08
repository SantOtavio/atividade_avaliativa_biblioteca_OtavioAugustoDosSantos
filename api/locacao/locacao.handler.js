const crud = require("../../crud");
const livroHandler = require("../livro/livro.handler");

async function buscarLocacao() {
  return await crud.get("locacao");
}

async function buscarLocacaoId(id) {
  return await crud.getById("locacao", id);
}

async function create(
  idCliente,
  dataLocacao,
  dataDevolucao,
  livros,
  idLocacao
) {
  if (idLocacao) {
    await crud.save("locacao", idLocacao, {
      idCliente,
      dataLocacao,
      dataDevolucao,
    });
  } else {
    const locacoes = await crud.get("locacao");
    const locacaoAtiva = locacoes.filter(
      (locacao) => locacao.idCliente === idCliente
    );

    if (locacaoAtiva.length > 0) {
      throw new Error("Cliente já possui uma locação ativa");
    }

    const locacao = await crud.save("locacao", null, {
      idCliente,
      dataLocacao,
      dataDevolucao,
    });

    console.log("amem");

    await locacaoLivro(livros, locacao.id);
  }
  return buscarLocacao();
}


async function deletar(id) {
  await crud.delete("locacao", id);
  return buscarLocacao();
}

async function locacaoLivro(livros, idLocacao) {
  for (let i = 0; i < livros.length; i++) {
    const livro = await livroHandler.buscarLivroId(livros[i]);
    console.log("status", livro.statusLocacao);
    if (livro.statusLocacao == "nlocado") {
      await crud.save("locacaoLivro", null, {
        idLocacao: idLocacao,
        idLivro: livros[i],
      });

      crud.save("livro", livros[i], {
        titulo: livro.titulo,
        categoria: livro.categoria,
        statusLocacao: "locado",
      });
    } else {
      throw new Error("Livro não está disponível");
    }
  }
}

module.exports = {
  buscarLocacao,
  create,
  deletar,
  buscarLocacaoId,
};
