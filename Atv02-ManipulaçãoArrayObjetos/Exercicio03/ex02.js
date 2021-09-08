const dados_json = require('./pessoas.json');

let MediaIMC = 0

dados_json.forEach(pessoa => {
    MediaIMC += (pessoa.peso / (pessoa.altura * pessoa.altura));
    console.log(pessoa.idade)
})

console.log(MediaIMC /dados_json.length);