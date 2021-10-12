const produtos = require('./produtos.json');

produtos.forEach((produto) => {
    precoTotalProduto = 0;
    precoTotalProduto = parseInt(produto.qtdEstoqueMinimo) + parseInt(produto.qtdEstoqueMaximo/2);
    console.log(`O produto ${produto.nome} tem média de ${precoTotalProduto}`);

});
