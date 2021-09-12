const veiculos = require('./Veiculos.json');

       veiculos.forEach(veiculos => {
        let{marca} = veiculos;
        console.log(`Os tipos de marcas de modelos que existem nas listas: -- ${marca} `);
});