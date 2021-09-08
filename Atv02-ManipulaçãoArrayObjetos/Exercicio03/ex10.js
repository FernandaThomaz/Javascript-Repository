const pessoas = require('./pessoas.json');

 const dados_json = pessoas.reduce((soma, item) => {
    return soma + parseFloat(item.altura);
},0);

console.log(`A altura média dessas pessoas é ${dados_json / pessoas.length}`);


