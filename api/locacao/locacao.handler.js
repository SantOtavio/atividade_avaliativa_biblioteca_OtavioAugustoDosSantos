const crud = require("../../crud");

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

    const locacaoLivrosArr = crud.get("locacaoLivros");
    

    const locacaoLivros = await crud.save("locacao", idLocacao, {
      idCliente,
      dataLocacao,
      dataDevolucao,
    });

    for (let i = 0; i < livros.length; i++) {
      await crud.save("locacaoLivro", null, {
        idLocacao: locacaoLivros.id,
        idLivro: livros[i],
      });
    }
  }
  return buscarLocacao();
}

async function deletar(id) {
  await crud.delete("locacao", id);
  return buscarLocacao();
}

module.exports = {
  buscarLocacao,
  create,
  deletar,
  buscarLocacaoId,
};
