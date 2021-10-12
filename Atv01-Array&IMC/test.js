function CriarArquivo() {
    fs.exists('produtos.json', (exists) => {
        if (!exists) {
            fs.writeFile('produtos.json', '[]', 'utf8', () => {
                console.log("Novo json criado com sucesso");
            });
        }

    });
}