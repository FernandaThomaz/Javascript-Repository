const pessoas = require('./pessoas.json');

let pessoas_estado = []

let estados = pessoas.map((pessoa) => { 
    return pessoa.estado; 
}).filter((i)=>{
    if(!pessoas_estado.includes(i)) pessoas_estado.push(i) 
});

pessoas_estado.forEach(estado => {
    let quantidade_de_pessoa = pessoas.filter((pessoa)=>{
        return pessoa.estado == estado;
    });
    console.log(`Há ${quantidade_de_pessoa.length} pessoas no estado de ${estado}.`);
})

