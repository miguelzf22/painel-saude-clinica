class Paciente{
    #nome
    #altura
    #peso
    #cidade
    constructor(nome, altura, peso, cidade){
        this.#nome = nome
        this.#altura = altura
        this.#peso = peso
        this.#cidade = cidade
    }
    getNome(){
        return this.#nome
    }

    setNome(nome){
        this.#nome = nome
    }

    getAltura(){
        return this.#altura
    }

    setAltura(altura){
        this.#altura = altura
    }

    getPeso(){
        return this.#peso
    }

    setPeso(peso){
        this.#peso = peso
    }

    getCidade(){
        return this.#cidade
    }

    setCidade(cidade){
        this.#cidade = cidade
    }

    calcularIMC(altura, peso){
        altura = Number(altura)
        peso = Number(peso)
        return peso / (altura*altura)
    }

    definirClassificacao(IMC){
        IMC = Number(IMC)
        if(IMC<=18.5) return "Abaixo do peso"
        if(IMC<=24.9) return "Peso normal"
        if(IMC<=29.9) return "Acima do peso"
        if(IMC<=34.9) return "Obesidade I"
        if(IMC<=39.9) return "Obesidade II"
        return "Obesidade III"
    }
}

export default Paciente