/*
    3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
        • O menor valor de faturamento ocorrido em um dia do mês;
        • O maior valor de faturamento ocorrido em um dia do mês;
        • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

    IMPORTANTE:
    a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/


// Array com os valores de faturamento diário
const faturamentoDiario = [221741664, 245376698, 261396134, 267426612, 428892258, 46251174, 111914722, 38474823, 3737838, 26597563, 489242448, 184192614, 3252401826, 438291667, 182356852, 43550662, 133271025, 256818318, 17181221, 13220495, 841461];

// variáveis para armazenar o menor e o maior valor de faturamento
let menorFaturamento = faturamentoDiario[0];
let maiorFaturamento = faturamentoDiario[0];

// variável para armazenar o valor total de faturamento no mês
let totalFaturamento = 0;

// loop para percorrer o array de faturamento diário
for (let i = 0; i < faturamentoDiario.length; i++) {
  // verificando se o valor atual é menor que o menorFaturamento
  if (faturamentoDiario[i] < menorFaturamento) {
    menorFaturamento = faturamentoDiario[i];
  }
  
  // verificando se o valor atual é maior que o maiorFaturamento
  if (faturamentoDiario[i] > maiorFaturamento) {
    maiorFaturamento = faturamentoDiario[i];
  }
  
  // somando o valor atual ao totalFaturamento
  totalFaturamento += faturamentoDiario[i];
}

// calculando a média mensal de faturamento
const mediaMensal = totalFaturamento / faturamentoDiario.length;

// variável para armazenar o número de dias em que o faturamento diário foi superior à média mensal
let diasAcimaMedia = 0;

// loop para percorrer o array de faturamento diário novamente
for (let i = 0; i < faturamentoDiario.length; i++) {
  // verifica se o valor atual é maior que a média mensal
  if (faturamentoDiario[i] > mediaMensal) {
    diasAcimaMedia++;
  }
}

// exibindo os resultados
console.log("Menor faturamento diário: " + menorFaturamento);
console.log("Maior faturamento diário: " + maiorFaturamento);
console.log("Número de dias com faturamento acima da média mensal: " + diasAcimaMedia);
