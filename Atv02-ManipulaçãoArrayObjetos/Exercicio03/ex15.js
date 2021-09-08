const pessoas = require('./pessoas.json');

dados_json = pessoas.map((pessoa)=>{
    return `Nome: ${pessoa.nome} e E-mail: ${pessoa.email}`
});

console.log(dados_json)