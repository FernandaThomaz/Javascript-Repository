const pessoas = require('./pessoas.json');

let tipo_de_sangue = pessoas.filter((pessoa) => {
    return pessoa.tipo_sanguineo == "O+" ;
})
console.log(`Há ${tipo_de_sangue.length} pessoas do tipo de sangue 0+`)
