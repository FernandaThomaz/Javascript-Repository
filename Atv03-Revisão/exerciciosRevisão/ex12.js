const veiculos = require('./Veiculos.json');

let list_marcas = []
veiculos.forEach(veiculo => {
    if(!list_marcas.includes(veiculo.marca)){
        list_marcas.push(veiculo.marca);
    }
})
list_marcas.forEach(marca => {
    quantidade_de_veiculos = veiculos.filter(veiculo => {
        return veiculo.marca == marca;
    });
    console.log(`As marcas ${marca} tem quantidade de ${quantidade_de_veiculos.length} veiculos.`);
});