const produtos = require('./produtos.json');

let Departamento = produtos.map((produto) => {
    return produto.Departamento;
});

let list_departamento = Array.from(new Set(Departamento));

list_departamento.forEach(i => {
    let produto = produtos.filter((produto) => {
        return produto.Departamento == i
    });
        console.log(`Esses são as quantidades de produtos estocados por departamento ${list_departamento.length} que existem: ${produto.length}`);
})