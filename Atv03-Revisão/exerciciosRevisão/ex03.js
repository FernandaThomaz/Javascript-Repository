const feriados = require('./Feriados.json');

let dados_json = feriados.find((feriado) => { 
    return feriado.name == 'Proclamação da República';
})
console.log(`Nome: ${dados_json.name}`);
console.log (`Data: ${dados_json.date}`);
console.log (`Tipo: ${dados_json.type}`);
