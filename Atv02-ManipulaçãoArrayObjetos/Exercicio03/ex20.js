const pessoas = require('./pessoas.json');
const fs = require('fs');

dados_json = pessoas.filter((pessoa)=>{
    return (pessoa.idade > 30) && (pessoa.peso / (pessoa.altura*pessoa.altura)) > 25 
});

fs.writeFile('./new_pessoas30anos.json', JSON.stringify(dados_json), err => {
    err ? console.log("Ocorreu erro ao gravar arquivo!") :
     console.log("Arquivo gravado com sucesso!")
    
})
