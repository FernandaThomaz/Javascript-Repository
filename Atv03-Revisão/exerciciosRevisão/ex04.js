const feriados = require('./Feriados.json');
const redline = require('readline');

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Insira a data: ", resposta =>{
    is_valid = false;
    for(feriado of feriados){
        if(resposta == feriado.date) is_valid = true
    }
    is_valid ? console.log(`Feriado, Nome: ${feriado.name}`) : console.log(`Não há feriados!`);
    rl.close();
});
