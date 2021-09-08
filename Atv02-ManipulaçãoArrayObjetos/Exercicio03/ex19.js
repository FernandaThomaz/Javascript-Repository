const pessoas = require('./pessoas.json');

let dados_json = pessoas.filter((pessoa) => {
    return pessoa.nome == "Raul Nathan Oliver Dias";
}).map((pessoa) => {
    return `${pessoa.estado}, ${pessoa.cidade}, ${pessoa.endereco}, ${pessoa.numero}, ${pessoa.bairro}`
});

console.log(dados_json)