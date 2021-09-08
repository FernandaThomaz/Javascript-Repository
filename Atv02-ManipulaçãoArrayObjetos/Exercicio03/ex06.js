const pessoas = require('./pessoas.json');

let estados = pessoas.filter((pessoa) => {
    return pessoa.idade >=20 && pessoa.idade <=45;
}).map((pessoa) => {
    return pessoa.estado;
});

console.log(estados)