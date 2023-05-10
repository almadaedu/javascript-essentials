class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this. altura = altura
    }
    
    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }
}

const pessoa01 = new Pessoa('José', 70, 1.86)


console.log(pessoa01.calcularImc())