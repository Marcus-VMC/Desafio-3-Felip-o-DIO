class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    mensagemAtaque(){
        let ataque = ""

        if(this.tipo === "Mago"){ataque = "Magia"}
        else if(this.tipo === "Guerreiro"){ ataque = "Espada" }
        else if(this.tipo === "Monge"){ataque = "Artes Marciais"}
        else if(this.tipo === "Ninja"){ataque = "Shuriken"}

        console.log("o " + this.tipo + " Atacou usando " + ataque)
    }
    }

let personagem = new heroi ("Marcus Vinícius" , "23" , "Ninja")

personagem.mensagemAtaque()


    