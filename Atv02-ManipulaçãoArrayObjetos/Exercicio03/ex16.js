const pessoas = require('./pessoas.json');

let pessoas_possuem_peso_acima_de_80 = pessoas.filter((pessoa) => {
    return pessoa.peso > 80;
})

console.log(`Há ${pessoas_possuem_peso_acima_de_80.length} pessoas que possuem peso acima de 80.`)
