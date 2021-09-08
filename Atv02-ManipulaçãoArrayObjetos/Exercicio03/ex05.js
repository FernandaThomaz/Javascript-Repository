const pessoas = require('./pessoas.json');

let cidades = pessoas.filter((pessoa) => {
    return pessoa.idade >=20 && pessoa.idade <=45;
}).map((pessoa) => {
    return pessoa.cidade;
});
console.log(cidades)