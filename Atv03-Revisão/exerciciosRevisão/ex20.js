const veiculos = require('./Veiculos.json');

valor_total_dos_carros = 0;
veiculos.forEach(element => {
    valor_total_dos_carros += parseFloat(element.valor.replace("R$ ", ""));
});
console.log(`Os valores totais dos carros da lista foram R$ ${valor_total_dos_carros}`);