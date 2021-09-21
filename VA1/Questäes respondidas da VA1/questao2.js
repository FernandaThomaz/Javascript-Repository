const produtos = require('./produtos.json');

function pesquisa() {
    let p = produtos.some((produto) => {
        return produto.qtdEstoque > produto.qtdEstoqueMaximo;
    });
    console.log(p);
}
pesquisa();