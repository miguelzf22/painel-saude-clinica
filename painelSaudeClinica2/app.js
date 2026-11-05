// Criando a classe de domínio

// Criando a classe
class Cliente {
    nome;
    altura;
    massa;
    constructor(nome, altura, massa) {
        this.nome = nome;
        this.altura = Number(altura);
        this.massa = Number(massa);
        this.imc = this.calcularIMC(altura, massa);
        this.situacao = this.situacaoIMC(this.imc);
    }
    calcularIMC(altura, massa) {
        return Number(
            (massa / (altura * altura)).toFixed(2)
        );
    }
    situacaoIMC(imc) {
        if (imc < 18.5) return "Abaixo do Peso";
        if (imc <= 24.9) return "Normal";
        if (imc <= 29.9) return "Sobrepeso";
        if (imc <= 34.9) return 'Obesidade Grau I';
        if (imc <= 39.9) return 'Obesidade Grau II';
        return 'Obesidade Grau III';
    }
}

class ManipuladorDOM{
    // renderizar a tabela no DOM
    #tabelaCorpo;

    constructor(){
        this.#tabelaCorpo = document.getElementById('tabela-corpo');
    }

    renderizarTabela(clientes){
        // limpar a a tabela
        this.#tabelaCorpo.innerHTML='';
        // interação sobre as instâncias usando forEach
        clientes.forEach((cliente)=>{
            const linha = document.createElement('tr');
            linha.innerHTML=``;

            const dados = [
                cliente.nome,
                cliente.altura,
                cliente.massa,
                cliente.imc,
                cliente.situacao
            ]

            for(let dado of dados){
                const celula = document.createElement('td')
                celula.textContent = dado
                linha.appendChild(celula)
            }

            this.#tabelaCorpo.appendChild(linha)
        })
    }
}


class PainelApp {

    #clientes = [];
    #form;
    
    constructor(){
        this.#form = document.getElementById('form-paciente');
        this.manipulaDom = new ManipuladorDOM()
    }

    // Criando ponto de partida
    iniciar(){
        // Configurando eventos
        this.#configurarEventos();
    }

    // Configurando eventos
    #configurarEventos(){
        this.#form.addEventListener('submit', (e)=>{
            this.#cadastrarCliente(e);
        });
    }

    #cadastrarCliente(e){
        e.preventDefault(); // Impede o recarregamento padrão da máquina

        // Capturando os valores digitados
        const nomeInput = document.getElementById('nome').value.trim();
        const alturaInput = document.getElementById('altura').value;
        const pesoInput = document.getElementById('peso').value;

        // Instanciando objeto do negócio
        const novoCliente = new Cliente(nomeInput, alturaInput, pesoInput);
        
        this.#clientes.push(novoCliente);
        this.manipulaDom.renderizarTabela(this.#clientes);

        this.#form.reset();
        document.getElementById('nome').focus(); 
    }

}

const app = new PainelApp()
app.iniciar()