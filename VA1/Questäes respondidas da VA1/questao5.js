const produtos = require('./produtos.json');

let departamentos = produtos.map((produto) => {
    return produto.Departamento;
});

let lista_departamentos = Array.from(new Set(departamentos));

lista_departamentos.forEach(i => {
    let t = 0;
    valor = produtos.filter(item => {
        if(i == item.Departamento){
            t += parseFloat(item.precoCusto)
            return t
        }
    })

    console.log(`${i} ${t / valor.length}`);
    
})