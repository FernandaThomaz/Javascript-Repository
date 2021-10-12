// Rodando os produtos.json para software API insomnia 
const express = require('express');
const produtos = require('./produtos.json');
const app = express();
const port = 3000;
let fs = require('fs');
app.use(express.json());
let verificador = 0;


// Filtrar código
function getProdutos(){
  return produtos;
}

// Função de marca
function getProdutoMarca(marca){
  let dados_json = produtos.filter(produto =>{
      return produto.marca === marca;
  });
  return dados_json;
}

// Filtrar produto por código
function getProdutoCodigo(codigo){
  let dados_json = produtos.find(produto =>{
      return produto.codigo === codigo;
  });
  return dados_json;
}

// Filtrar produto por nome
function getProdutoNome(nome){
  let dados_json = produtos.find(produto =>{
      return produto.nome === nome;
  });
  return dados_json;
}

let newProduto = {
  codigo: 11,
  nome: "Pasta de Dente",
  marca: "Colgate",
  precoCusto: 5.00,
  precoVenda: 5.50,
  qtdEstoque: 15,
  categoria: "Higiene"
}

let editProduto = {
    codigo: 1,
    nome: "Shampoo",
    marca: "Seda",
    precoCusto: 4.85,
    precoVenda: 5.50,
    qtdEstoque: 6,
    categoria: "Hidratação"
}

// Rota para listar produtos
app.get('/listarProdutos', (req, res) => {
    console.log(req.query);
    res.send(produtos);
});

// Rota para filtrar produtos por marca
app.get('/listarProdutos/:marca', (req, res) => {
  console.log(req.params.marca)
  res.send(getProdutoMarca(req.params.marca));
});

// Rota para buscar produtos por codigo 
app.get('/listarProdutos/:codigo', (req, res) => {
  console.log(req.params.codigo)
  res.send(getProdutoCodigo(req.params.codigo))
});
// Roda para filtrar produtos por nome
app.get('/listarProdutos/nome/:nome', (req, res) => {
  res.send(filtrar(req.params.nome));
});

app.listen(port, () => {
  console.log(`App Listening on port ${port}...`);
});

// Função filtrar todos produtos 
function filtrar(busca) {
  const produtos = produtos.filter(p => {
      return p.nome == busca;
  });
  return produtos;
} 
// Filtrar produto por código
function filtrar(codigo){
  const produtos = require('./produtos.json');

  let dados_json = produtos.filter(produto =>{
      return produto.codigo === codigo;
  });

  return dados_json;
}

// Função para filtrar por marca 
function filtrarMarca(marca){
  const produtos = require('./produtos.json');
  let dados_json = produtos.filter(produto =>{
    return produto.marca === marca;
});
return dados_json;
}

//-----------------------------------------APLICAÇOES DAS ROTAGENS-----------------------------------------------------//

// Função para criar um novo arquivo JSON
function CriarArquivo(){
  var Produtos = {};
  fs.exists('produtos.json', function(exists){
    
    // Arquivo de produto criado que existe 
    if(exists){

      fs.writeFile('produtos.json', '[]', 'utf8', function readFileCallback(error, data){
            if (error){
                console.log(error);
            } else {
                Produtos = JSON.parse(data);
                Produtos.forEach(p =>{
                    if(p.codigo === produto.codigo){
                        console.log("Novo codigo JSON criado com sucesso!");
                        return verificador = 1;
                    };
                });
    
                if(verificador != 1){
                    Produtos.push(
                        {
                            codigo: produto.codigo, 
                            marca: produto.marca, 
                            nome: produto.nome, 
                            precoCusto: produto.precoCusto, 
                            precoVenda: produto.precoVenda, 
                            qtdEstoque: produto.qtdEstoque, 
                            categoria: produto.categoria
                        }
                    );

                    var objJSON = JSON.stringify(Produtos); 
                    fs.writeFile('produtos.json', objJSON, function readFileCallback(error, data){
                        if (error){
                            console.log(error);
                        };
                    });
                }
            }
        });
    } 
    // Arquivo de produto criado que não existe
    else {
        let Produtos = [
            {
                codigo: produto.codigo, 
                marca: produto.marca, 
                nome: produto.nome, 
                precoCusto: produto.precoCusto, 
                precoVenda: produto.precoVenda, 
                qtdEstoque: produto.qtdEstoque, 
                categoria: produto.categoria
            }
        ]
        var objJSON = JSON.stringify(Produtos);
        fs.writeFile('produtos.json', objJSON, function readFileCallback(error, data){
            if (error){
                console.log(error);
            };
        });
      }
    });

     // Editar os produtos criados
    const produtos = require('./produtos.json');
    function putProduto(produto){
      let idVerificacao = 1;
      let listProdutos = [];
     
      produtos.forEach(Produtos =>{
          if(Produtos.codigo == idVerificacao){
              Produtos = {
                  codigo: produto.codigo, 
                  marca: produto.marca, 
                  nome: produto.nome, 
                  precoCusto: produto.precoCusto, 
                  precoVenda: produto.precoVenda, 
                  qtdEstoque: produto.qtdEstoque, 
                  categoria: produto.categoria
              }
            
          }
          listProdutos.push(Produtos);
        });

          var json = JSON.stringify(produtos);
            fs.writeFile('produtos.json', json, function readFileCallback(err, data){
                if (err){
                    console.log(err);
                };
            });
    return console.log("Atualização realizada com sucesso!");        
}}