const pessoas= require('./pessoas.json');

let pessoamaioridade = pessoas.filter(p => {
    {return p.idade >= 18}
})

console.log(`Há ${pessoamaioridade.length} pessoas com maior idade.`)

