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
  idLocacao,
  livros
) {
  if (idLocacao) {
    await crud.save("locacao", idLocacao, {
      idCliente,
      dataLocacao,
      dataDevolucao,
    });

    return buscarLocacaoId(idLocacao);
  } else {
    await crud.save("locacao", null, { idCliente, dataLocacao, dataDevolucao });

    for (let i = 0; i < livros.length; i++) {
      await crud.save("locacaoLivro", null, {
        idLocacao,
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
