const pessoas = require('./pessoas.json');

const dados = pessoas.some((pessoa)=>{
    return pessoa.idade < 18
});

dados ? console.log("Existe pessoas de menor de idade.") : console.log("Não existe pessoas de menor de idade.")
