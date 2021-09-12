const veiculos = require('./Veiculos.json');
      
veiculos_value = veiculos.filter(veiculo => {return veiculo.anoModelo < 2005; });
valor_total = 0;
veiculos_value.forEach(element => {
    valor_total += parseFloat(element.valor.replace("R$ ", ""));
});
console.log(`O valor total dos carros com data da fabricação anterior de 2005 foi: R$ ${valor_total}`);