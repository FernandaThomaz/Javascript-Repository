const veiculos = require('./Veiculos.json');

let valor = 0;
let carro = ""

veiculos.forEach(veiculo => {
    valor_do_veiculo = parseFloat(veiculo.valor.replace("R$ ", ""));
    if(valor < parseFloat(valor_do_veiculo)){
        valor = parseFloat(valor_do_veiculo);
        carro = veiculo;
    }
});
console.log(`O ${carro.modelo} é o carro mais caro e está valendo ${valor} reias.`);