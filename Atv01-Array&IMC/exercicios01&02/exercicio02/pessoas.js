var dados_json = require('./pessoas.json');

let list_pessoas = dados_json.pessoas

//Transformando lista de pessoas com abaixo peso em array
let abaixoPeso = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 18.5;
}).map((pessoa) => {return pessoa.nome; });
console.log(abaixoPeso.length != 0 ? `Abaixo do peso: ${abaixoPeso}\n`: "Não há pessoa de abaixo do peso.\n")

//Transformando lista de pessoas com peso normal em array
let pesoNormal = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 18.5 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 25;
}).map((pessoa) => {return pessoa.nome; });
console.log(pesoNormal.length!= 0 ? `Peso normal: ${pesoNormal}\n`: "Não há pessoa com peso normal.\n")

//Transformando lista de pessoas em sobrepeso em array
let sobrepeso = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 25 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 30;
}).map((pessoa) => {return pessoa.nome; });
console.log(sobrepeso.length!= 0 ? `Sobrepeso: ${sobrepeso}\n` : "Não há pessoa de sobrepesos.\n");

//Transformando lista de pessoas com obesidade grau I em array
let ObesidadeGrauI = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 30 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 35;
}).map((pessoa) => {return pessoa.nome; });
console.log(ObesidadeGrauI.length!= 0 ? `Obesidade Grau I: ${ObesidadeGrauI}\n`: "Não há pessoa de obesidade grau I.\n");

//Transformando lista de pessoas com obesidade grau II em array
let ObesidadeGrauII = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 35 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 40;
}).map((pessoa) => {return pessoa.nome; });
console.log(ObesidadeGrauII.length!= 0 ? `Obesidade Grau II: ${ObesidadeGrauII}\n`: "Não há pessoa de obesidade grau II.\n");

//Transformando lista de pessoas com obesidade grau III em array
let ObesidadeGrauIII = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 40 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 45;
}).map((pessoa) => {return pessoa.nome });
console.log(ObesidadeGrauIII.length!= 0 ? `Obesidade Grau III: ${ObesidadeGrauIII}\n`: "Não há pessoa de obesidade grau III.\n");
