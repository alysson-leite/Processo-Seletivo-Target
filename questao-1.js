/*
    Observe o trecho de código abaixo:
    int INDICE = 13, SOMA = 0, K = 0;

    enquanto K < INDICE faça
    {
    K = K + 1;
    SOMA = SOMA + K;
    }

    imprimir(SOMA);

    Ao final do processamento, qual será o valor da variável SOMA?
*/

let indice = 13
let soma = 0
let k = 0

do{
    k = k + 1;
    soma = soma + k;
} while(k < indice)

console.log(soma)

// soma = 91