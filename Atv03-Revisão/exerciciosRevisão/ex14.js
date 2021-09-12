const veiculos = require('./Veiculos.json');

let ano = 0;
let carro = ""

veiculos.forEach(veiculo => {
    ano_veiculo = parseFloat(veiculo.anoModelo);
    if(ano < parseFloat(ano_veiculo)){
        ano = parseFloat(ano_veiculo);
        carro = veiculo;
    }
});
console.log(`${carro.modelo} é o carro mais novo e foi fabricado no ano ${ano}.`);