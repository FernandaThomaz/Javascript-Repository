const pessoas = require('./pessoas.json');
 
let pessoa_mais_alta = 0
pessoas.forEach(i => {
    if(pessoa_mais_alta < parseFloat(i.altura)){
        pessoa_mais_alta = parseFloat(i.altura)
    }
})

console.log(`Há pessoa com ${pessoa_mais_alta} sendo ela a mais alta.`)