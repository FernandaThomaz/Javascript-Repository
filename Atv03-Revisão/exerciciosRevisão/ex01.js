const feriados = require('./Feriados.json');

let dados_json = feriados.filter((feriado) => { 
    if(new Date(feriado.date).getUTCFullYear() == "2021") return feriado;
})
console.log(`Temos ${dados_json.length} feriados em 2021.`)
