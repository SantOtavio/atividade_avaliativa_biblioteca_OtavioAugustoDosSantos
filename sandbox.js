const crud = require("./crud");

async function buscarDados(){
    const dados = await crud.get("pessoas");
    console.log(dados);
}

async function buscarDadoId(){
    const dados = await crud.getById("pessoas", "6pRJN9u6g2ByhBSuJVHB");
    console.log(dados);
}

async function deletar(){
    const dados = await crud.remove("pessoas", "UZEA45nBv0gseHoMkEjs");
    console.log(dados);
}

async function criardb(){
    const dados = await crud.save("cliente", {
        nome: "João",
        idade: 20
    });
    console.log(dados);
}

//deletar();
criardb();