const pessoas = require('./pessoas.json');

dados_json = pessoas.map((pessoa)=>{
     console.log (`
     Estado: ${pessoa.estado}
     Cidade: ${pessoa.cidade}
     Endereço: ${pessoa.endereco}
     Numero: ${pessoa.numero}
     Bairro: ${pessoa.bairro}\n.`)
});
