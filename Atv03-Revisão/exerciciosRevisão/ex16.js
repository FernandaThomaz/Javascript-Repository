const veiculos = require('./Veiculos.json');

let list_combustivel = []
veiculos.forEach(i => {if(!list_combustivel.includes(i.combustivel)){list_combustivel.push(i.combustivel);}});

list_combustivel.forEach(combustivel => {
    combustiveis = veiculos.filter(veiculo => {return veiculo.combustivel == combustivel;});
    console.log(`Tipo de combustível: ${combustivel}.`);
    console.log(`Quantidade de veículos com esse tpo de combustível: ${combustiveis.length}.`);
})