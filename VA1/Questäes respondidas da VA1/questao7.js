const produtos = require('./produtos.json');

produtos.forEach((produto) => {
    a = parseInt(produto.qtdEstoqueMinimo) + parseInt(produto.qtdEstoqueMaximo)/2;
    console.log(a);
});