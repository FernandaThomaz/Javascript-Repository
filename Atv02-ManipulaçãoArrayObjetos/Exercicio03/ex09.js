const pessoas = require('./pessoas.json');

let tipo_de_sangue = pessoas.filter((pessoa) => {
    return pessoa.tipo_sanguineo == "O+" ;
})

let total_media_de_idade = 0
tipo_de_sangue.forEach(i => {
    total_media_de_idade += i.idade
})

console.log(`Atualmente há ${total_media_de_idade} pessoas com idade media`)
