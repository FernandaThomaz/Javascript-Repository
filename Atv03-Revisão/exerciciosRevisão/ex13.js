const veiculos = require('./Veiculos.json');

i = veiculos.sort(function (a, b) {
    if (a.anoModelo < b.anoModelo) {return 1;}
    if (a.anoModelo > b.anoModelo) {return -1;}
    return 0;
});
console.log(`O carro mais antigo: ${i[i.length - 1].marca}`); 
console.log(`Modelo do carro: ${i[i.length - 1].modelo}`);
console.log (`Ano do modelo: ${i[i.length - 1].anoModelo}`);
