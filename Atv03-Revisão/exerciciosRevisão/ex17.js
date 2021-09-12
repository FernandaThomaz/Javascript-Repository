const veiculos = require('./Veiculos.json');
const redline = require('readline');

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function pesquisar(fipe){
    n =  veiculos.filter(veiculo => { 
        return veiculo.codigoFipe == fipe;
    });
    return n;
}
rl.question("Insira o código do FIBE: ", resposta =>{
    busca_veiculos = pesquisar(resposta);
    busca_veiculos.length > 0 ? console.log(`${busca_veiculos[0].marca} ${busca_veiculos[0].modelo}`) : 
    console.log(`Nenhum veículo foi encontrado.`); 
    rl.close();
});