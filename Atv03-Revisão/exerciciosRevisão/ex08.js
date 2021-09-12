const veiculos = require('./Veiculos.json');

let list_fabricantes = []
veiculos.forEach(i => { if(!list_fabricantes.includes(i.marca)){ list_fabricantes.push(i.marca); }});
console.log(`Esses são os valores totais dos carros por fabricantes:`);
list_fabricantes.forEach(fabricante => {
    valor_total = 0.0;
    fabricantes = veiculos.filter(veiculo => {return veiculo.marca == fabricante; });
    fabricantes.forEach(a => { valor_total += parseFloat(a.valor.replace("R$ ", ""))});
    console.log(`Fabricante: ${fabricante}`);
    console.log(`Valor: ${valor_total / fabricantes.length}`);
})