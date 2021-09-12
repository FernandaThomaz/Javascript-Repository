const veiculos = require('./Veiculos.json');

veiculos_mais_caro_antes_2000 = veiculos.filter(veiculo => {return veiculo.anoModelo < 2000; });

i = veiculos_mais_caro_antes_2000.sort(function (a, b) {
    convert_a = parseFloat(a.valor.replace("R$ ", ""));
    convert_b = parseFloat(b.valor.replace("R$ ", ""));
    if (convert_a > convert_b) {return 1;}
    if (convert_a < convert_b) {return -1;}
    return 0;
});
console.log(`O carro mais caro antes do ano 2000: `);
console.log(`Marca do veiculo: ${i[i.length - 1].marca}`);
console.log(`Modelo: ${i[i.length - 1].modelo} `);
console.log(`Valor: ${i[i.length - 1].valor}`);

