const produtos = require('./produtos.json');

const precoVenda = produtos.map(p => {
    let c = {
        fornecedor: p.fornecedor,
        precoVenda: parseFloat(p.precoVenda)
    }
    return c;
});

const ordenado = precoVenda.sort((a, b) => {
    return a.preco + b.preco;
});

console.log(`O produto mais caro é: ${ordenado[ordenado.length - 1].fornecedor}`);