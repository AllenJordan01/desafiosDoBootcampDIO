// Desafio 03 - Escrevendo as classes de um jogo

class criarHeroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        if(this.tipo.toLowerCase() == "mago"){
            console.log(`O ${this.tipo} atacou usando magia`);
        }
        else if(this.tipo.toLowerCase() == "guerreiro"){
            console.log(`O ${this.tipo} atacou usando espada`);
        }
        else if(this.tipo.toLowerCase() == "monge"){
            console.log(`O ${this.tipo} atacou usando artes marcias`);
        }
        else if(this.tipo.toLowerCase() == "ninja"){
            console.log(`O ${this.tipo} atacou usando shuriken`);
        }
        else {
            console.log("Tipo de guerreiro inválido");
        }
    }
}

let novoHeroi = new criarHeroi("James", 67, "mago");
let novoHeroi2 = new criarHeroi("Maximus", 42, "guerreiro");


novoHeroi.atacar();
novoHeroi2.atacar();