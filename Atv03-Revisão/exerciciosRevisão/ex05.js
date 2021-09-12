const feriados = require('./Feriados.json');
const redline = require('readline');

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Insira o nome do feriado: ", resposta =>{
    is_valid = false;
    for(feriado of feriados){
        if(resposta == feriado.name) is_valid = true
    }
    is_valid ? console.log(`Feriado, Data: ${feriado.date}`) : console.log(`Não há esse feriados!`);
    rl.close();
});
