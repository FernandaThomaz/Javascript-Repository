const dados_pessoas = require('./pessoas.json');

dados_pessoas.forEach((pessoa) => {
    let IMC = (pessoa.peso / (pessoa.altura * pessoa.altura))
    console.log(`${pessoa.nome}\nIMC: ${IMC}\n`)
})
