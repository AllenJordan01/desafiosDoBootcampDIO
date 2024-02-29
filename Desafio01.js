// Desafio 01 - Classificador de nível de herói

const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

let continuar = true;

const classificarNivelDeHeroi = () => {
 rl.question("Digite o nome do herói: ", (heroName) => {
    rl.question("Digite o XP do herói: ", (heroXP) => {
      let heroLeague;

      if (heroXP <= 1000){
          heroLeague = "Ferro";
      }
      else if (heroXP <= 2000){
          heroLeague = "Bronze";
      }
      else if (heroXP <= 5000){
          heroLeague = "Prata";
      }
      else if (heroXP <= 7000){
          heroLeague = "Ouro";
      }
      else if (heroXP <= 8000){
          heroLeague = "Platina";
      }
      else if (heroXP <= 9000){
          heroLeague = "Ascendente";
      }
      else if (heroXP <= 10000){
          heroLeague = "Imortal";
      }
      else {
          heroLeague = "Radiante";
      }

      console.log(`O Herói de nome ${heroName}, está no nível de ${heroLeague}`);

      rl.question("Gostaria de parar? S - sim || N - não\n", (parar) => {
        if (parar.toLowerCase() == "s"){
          continuar = false;
        }
        if (continuar) {
          solicitarNomeHeroi();
        } else {
          rl.close();
        }
      });
    });
 });
};

classificarNivelDeHeroi();
