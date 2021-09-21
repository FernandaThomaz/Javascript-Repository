const produtos = require('./produtos.json');

    produtos.forEach(a =>{ 
        let precoCusto = parseFloat(a.precoCusto);  
        let precoVenda = parseFloat(a.precoVenda);  
        
        let porcentagem = ((precoVenda/precoCusto) - 1) * 100; 
        console.log("Nome do produto: " + [a.nome] +  " Porcetagem do lucro: " + [porcentagem.toFixed(2)] + "%"); 
    
    });