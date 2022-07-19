const crud = require("../../crud");

async function buscarLocacaoLivro() {
  return await crud.get("locacaoLivro");
}

async function buscarLocacaoLivroId(id) {
  return await crud.getById("locacaoLivro", id);
}

// async function create(idLocacao, idLivro, idLocacaoLivro) {
//   if (idLocacaoLivro) {
//     await crud.save("locacaoLivro", idLocacaoLivro, {
//       idLocacao,
//       idLivro,
//     });
//   } else {
//     let podeLocar = true;
//     const livro = await crud.get("livro", idLivro);
//     if (livro.statusLocacao === "locado") {
//       podeLocar = false;
//     }
//     const locacao = await crud.get("locacao", idLocacao);
//     if (locacao.livros.length > 0) {
//       podeLocar = false;
//     }
//     if (podeLocar) {
//       await crud.save("locacaoLivro", null, { idLocacao, idLivro });
//       await crud.save("livro", idLivro, { statusLocacao: "locado" });
//     } else {
//       throw new Error("Livro já está locado");
//     }
//   }
//   return buscarLocacaoLivro();
// }

async function deletar(id) {
  const locacaoLivro = await crud.getById("locacaoLivro", id);
  const livro = await crud.get("livro", locacaoLivro.idLivro);
  await crud.save("livro", locacaoLivro.idLivro, {
    statusLocacao: "disponível",
  });
  await crud.delete("locacaoLivro", id);
  return buscarLocacaoLivro();
}

module.exports = {
  buscarLocacaoLivro,
  deletar,
  buscarLocacaoLivroId,
};
