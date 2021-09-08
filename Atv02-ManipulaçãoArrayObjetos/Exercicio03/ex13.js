const pessoas = require('./pessoas.json');

let pessoa_mais_velha = 0
pessoas.forEach(i => {
    if(pessoa_mais_velha < i.idade){
        pessoa_mais_velha = i.idade
    }
})
console.log(`Há ${pessoa_mais_velha} pessoas mais velhas.`)