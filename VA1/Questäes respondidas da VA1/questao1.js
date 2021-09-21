const produtos = require('./produtos.json');
const redline = require('readline');

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pesquisar(codigo){
    n =  produtos.filter(produto => { 
        return produto.codigo == codigo;
    });
    return n;
}
rl.question("Insira o codigo: ", resposta =>{
    busca_produtos = pesquisar(resposta);
    busca_produtos.length > 0 ? console.log(`${busca_produtos[0].Departamento} ${busca_produtos[0].fabricante}`) : 
    console.log("Nenhum produto foi encontrado.");
    rl.close();
});