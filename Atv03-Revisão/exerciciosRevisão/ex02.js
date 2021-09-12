const feriados = require('./Feriados.json');

first = feriados[0];
last = feriados[feriados.length - 1];

console.log(`Primeiro feriado:
Nome: ${first.name} 
Data: ${last.date}
Tipo: ${first.type}`); 

console.log(`Último feriado:
Nome: ${last.name}
Data: ${last.date}
Tipo: ${last.type}`);
