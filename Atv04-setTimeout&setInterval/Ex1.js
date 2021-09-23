function cronometro(tempo, contagem_regressiva) {
    let tempoInicial = 0;
    const f = setInterval(() => {
        switch (contagem_regressiva) {
            case 1:
                if (tempoInicial < tempo) {
                    console.log(tempoInicial);
                    tempoInicial ++;
                }
                else {
                    clearInterval(f);
                }
                break;
            case 2: 
            if (tempo > tempoInicial) {
                console.log (tempo);
                tempo --;
            }
            else {
                clearInterval(f);
            }
    }
    }, 1000);
}

cronometro(10,1);