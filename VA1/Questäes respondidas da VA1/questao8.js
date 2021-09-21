const produtos = require('./produtos.json'); 

function busca(codigo) {
    return produtos.find(p => {
        return p.codigo === codigo;     
    });
}  

const produto = busca("1798");

if(parseInt(produto.qtdEstoque) < parseInt(produto.qtdEstoqueMinimo)){
    console.log("Estoque abaixo do mínimo.");
} else if(parseInt(produto.qtdEstoque) > parseInt(produto.qtdEstoqueMaximo)){
    console.log("Estoque acima do máximo.");
} else{    
    console.log("Estoque entre mínimo e máximo.");
}