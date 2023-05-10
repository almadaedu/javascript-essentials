class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
        this.anoNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }

}

function comparaPessoas(pessoa01, pessoa02) {
    
    if(pessoa01.idade > pessoa02.idade) {

        console.log(`${pessoa01.nome} é mais velho que ${pessoa02.nome}`)
    } else {
        console.log(`${pessoa02.nome} é mais velho que ${pessoa01.nome}`)
    }

}

const vitor = new Pessoa('Vitor', 25)
const edu = new Pessoa ('Edu', 22)

comparaPessoas(vitor, edu)