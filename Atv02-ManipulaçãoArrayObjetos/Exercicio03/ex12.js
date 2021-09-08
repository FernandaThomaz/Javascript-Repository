const pessoas = require('./pessoas.json');

let pessoa_mais_baixa = 1000000
pessoas.forEach(i => {

    if(pessoa_mais_baixa > parseFloat(i.altura)){
        pessoa_mais_baixa = parseFloat(i.altura)
    }
})

console.log(`Há pessoa com ${pessoa_mais_baixa} sendo ela a mais baixa.`)