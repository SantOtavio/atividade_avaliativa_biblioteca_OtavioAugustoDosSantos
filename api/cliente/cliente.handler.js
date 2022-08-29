const crud = require("../../crud");

async function buscarCliente() {
  return await crud.get("cliente");
}

async function buscarClienteId(id) {
  return await crud.getById("cliente", id);
}

async function create(cpf, nome, email, idCliente) {
  if (idCliente) {
    await crud.salvar("cliente", idCliente, { cpf, nome, email });
  } else {
    await crud.salvar("cliente", null, { cpf, nome, email });
  }
  return buscarCliente();
}

async function deletar(id) {
  await crud.delete("cliente", id);
  return buscarCliente();
}

module.exports = {
  buscarCliente,
  create,
  deletar,
  buscarClienteId,
};
