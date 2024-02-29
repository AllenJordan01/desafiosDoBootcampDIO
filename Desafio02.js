// Desafio 02 - Calculadora de partidas Rankeadas

const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

let continuar = true;

const calcularRankingDeHeroi = () => {
 rl.question("Digite o número de vitórias do herói: ", (vitorias) => {
    rl.question("Digite o número de derrotas do herói: ", (derrotas) => {

    let saldoVitorias = vitorias - derrotas;
      let heroLeague;

      if (saldoVitorias <= 10){
          heroLeague = "Ferro";
      }
      else if (saldoVitorias <= 20){
          heroLeague = "Bronze";
      }
      else if (saldoVitorias <= 50){
          heroLeague = "Prata";
      }
      else if (saldoVitorias <= 80){
          heroLeague = "Ouro";
      }
      else if (saldoVitorias <= 90){
          heroLeague = "Diamante";
      }
      else if (saldoVitorias <= 100){
          heroLeague = "Lendário";
      }
      else {
          heroLeague = "Imortal";
      }

      console.log(`O Herói tem saldo de ${saldoVitorias} vitórias, está no nível de ${heroLeague}`);

      rl.question("Gostaria de parar? S - sim || N - não\n", (parar) => {
        if (parar.toLowerCase() == "s"){
          continuar = false;
        }
        if (continuar) {
          calcularRankingDeHeroi();
        } else {
          rl.close();
        }
      });
    });
 });
};

calcularRankingDeHeroi();
