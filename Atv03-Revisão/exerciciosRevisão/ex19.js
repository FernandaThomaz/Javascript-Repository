const veiculos = require('./Veiculos.json');
const redline = require('readline');

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pesquisar(combustivel){
    n =  veiculos.filter(veiculo => { 
        return veiculo.combustivel == combustivel;
    });
    return n;
}
rl.question("Insira o tipo de combustivel do veículo: ", resposta =>{
    type_veiculos = pesquisar(resposta);
    type_veiculos.forEach(element => {
    console.log(element) 
    console.log("Disponível.");
    });
    rl.close();
});