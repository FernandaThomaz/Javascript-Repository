const pessoas = require('./pessoas.json');
let cont_nºdelistaposicao = 0 

pessoas.forEach(i => {
    cont_nºdelistaposicao += 1
    if(i.nome == "Laura Eduarda da Cunha"){
        console.log (`A posição da Laura Eduarda da Cunha está no nº ${cont_nºdelistaposicao}\n`)  
    }
})
