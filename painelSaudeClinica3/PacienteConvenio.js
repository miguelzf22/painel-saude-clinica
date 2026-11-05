import Paciente from './Paciente'

class PacienteConvenio extends Paciente{
    #carteirinha
    
    constructor(nome, altura, peso, cidade, carteirinha){
        super(nome, altura, peso, cidade)
        this.#carteirinha = carteirinha
    }

    getCarteirinha(){
        return this.#carteirinha
    }

    setCarteirinha(carteirinha){
        this.#carteirinha = carteirinha
    }
}

export default PacienteConvenio