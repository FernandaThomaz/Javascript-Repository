const pessoas = require('./pessoas.json');

let dados = pessoas.filter((pessoa) => {
    return pessoa.idade >=20 && pessoa.idade <=45;
})

console.log(`Total de pessoas entre 20 e 45 anos: ${dados.length}.`);
