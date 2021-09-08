const pessoas = require('./pessoas.json');

let pessoa_mais_nova = 1000000
pessoas.forEach(i => {
    if(pessoa_mais_nova > i.idade){
        pessoa_mais_nova = i.idade
    }
})
console.log(`Há ${pessoa_mais_nova} pessoas mais novas.`)