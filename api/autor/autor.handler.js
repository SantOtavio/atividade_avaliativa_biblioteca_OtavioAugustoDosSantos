const crud = require("../../crud");

async function buscarAutor() {
  return await crud.get("autor");
}

async function buscarAutorId(id) {
  return await crud.get("autor", id);
}

async function create(nome, sobrenome, idAutor) {
  if (idAutor) {
    await crud.save("autor", idAutor, { nome, sobrenome });
  } else {
    await crud.save("autor", null, { nome, sobrenome });
  }
  return buscarAutor();
}

async function deletar(id) {
  await crud.delete("autor", id);
  return buscarAutor();
}

module.exports = {
  buscarAutor,
  create,
  deletar,
  buscarAutorId,
};
