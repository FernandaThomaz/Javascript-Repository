const Produtos = require('./produtos.json');

let departamentos = Produtos.map((produto) => {
    return produto.Departamento;
});

let lista_departamentos = Array.from(new Set(departamentos));

lista_departamentos.forEach(i => {
    let produto = Produtos.filter((produto) => {
        return produto.Departamento == i
    });
        console.log(`Esses são as quantidades de produtos estocados por departamento que existem: ${produto.length}`);
})