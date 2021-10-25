const fs = require('fs');
const express = require('express');
const { info } = require('console');
const app = express();
const port = 3000;
const pessoa = "./pessoas.json";
app.use(express.json());

function CriarArquivo() {
    fs.exists(pessoa, (existe) => {
        if (!existe) {
            fs.writeFile(pessoa, '[]', 'utf8', () => {
                console.log("Novo arquivo JSON criado com sucesso!");
            });
        }
    });
}

function SalvarAlteração(pessoas) {
        fs.writeFile(pessoa, JSON.stringify(pessoas, null, 4), () => {
            console.log('Arquivo gerado com sucesso!');
        });
    }

function GravarCadastro(pessoas) {
    let pessoa = require(pessoas)
    const existe = pessoa.some(p=>{
        return p.cpf == pessoas.cpf
    })
    if(!existe){
        pessoa.push(pessoas);
        SalvarAlteração(pessoa);
        return {Mensagem: `Cadastro de pessoa foi preenchida e armazenada com sucesso: ${pessoa.nome}`};
    }
    else {
        return {Mensagem: `O cadastro preenchido não foi possível ser registrado, pois o cpf já existe`}
    }
}
function ListarPessoas(){
    const pessoas = require(pessoa)
    return pessoas;

}
function ListarPessoasPorNome(nome){
    let pessoas = require(pessoa);
    pessoas = pessoas.filter(p=>{
    return p.nome == nome;
    })
    return pessoas;
}

function ListarPorCPF(cpf) {
    const pessoas = require('./pessoas.json');
    pessoas = pessoas.filter((p) => {
        return p.cpf === cpf;
    });
    return pessoas;
}

function ListarPorTelefone(telefone){
    let pessoas = require(pessoa);
    pessoas = pessoas.filter(p=> {
        return p.telefones.some(tel => {
        return tel.number == telefone;
        })
    });
    return pessoas;
}
function RemoverCPF(cpf) {
    let pessoas = require(pessoa);
    const pos = pessoas.map(p=> {
        return p.cpf;
    }).indexOf(cpf);
       pessoas.splice(pos);
       SalvarAlteração(pessoa);
       return {Mensagem: "CPF removido com sucesso!"};
}

function RemoverTelefone(telefone){
    console.log (telefone);
    let pessoas = require(pessoa);
    pessoas.forEach(p=> {
        const pos = p.telefone.map(tel=> {
            return tel.number;
        }).indexOf(telefone);
        if (pos > 0) {
            p.telefone.splice(pos);
            info = {Mensagem: "Telefone removido com sucesso!"};
        }
        else {
            info = {Mensagem: "O telefone não existe"};
        }
    });
    return info;
}
/* pessoa: {
    telefone: [
     {
         tipo: "Celular"
         numero: "(22) 9123-4568"
     }
    ]
}
*/

function EditarPessoa(req){
    let pessoas = require(pessoa);
    const pos = pessoas.map(p => {
        return cpf;
    }).indexOf(req.params.cpf);
       pessoas[pos] = req.body;
       SalvarAlteração(pessoas);
       return {Mensagem: "Pessoa editada com sucesso. "};
}


CriarArquivo();

//Salvando alteração de pessoas
app.post('/pessoas', (req, res) => {
    console.log(req.body);
    res.send(SalvarAlteração(req.body));
});

//Gravando o cpf registrado para que não seja repetido
app.post('/pessoas', (req, res) => {
    res.send(GravarCadastro(req.body));
   });

//Gravando o cadastro por pessoa atraves CPF
app.get('/pessoas/nome/:cpf', (req,res) => {
    res.send(GravarCadastro(req.params.cpf));
});

//Listar todas as pessoas
    app.post('/pessoas', (req, res) => {
        res.send(ListarPessoas(req.body));
    });

//Listar pessoas por nome 
app.get('/pessoas/nome/:nome', (req, res) => {
    res.send(ListarPessoasPorNome(req.params.nome));
});

//Listar pessoa por cpf
app.get('/pessoas/cpf/:cpf', (req, res) => {
    res.send(ListarPorCPF(req.params.cpf));
});

//Listar pessoa por telefone
app.get('/pessoas/telefone/:telefone', (req, res) => {
    res.send(ListarPorTelefone(req.params.telefone));
});

//Remover CPF
app.delete('/pessoas/cpf/:cpf', (req, res) => {
    res.send(RemoverCPF(req.params.cpf))
})

//Remover Telefone
app.delete('/pessoas/telefone/:telefone', (req, res) => {
    res.send(RemoverTelefone(req.params.telefone))
});

//Editar pessoas 
app.put('/pessoas/editar/:cpf', (req, res) => {
    res.send(EditarPessoa(req))
})
//Rodando a porta
app.listen(port, () => {
    CriarArquivo();
    console.log(`App Listening on port ${port}...`);
  });
