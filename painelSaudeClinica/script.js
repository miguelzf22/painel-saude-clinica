/* Fonte de Dados */
const pacientes = [
    {
        nome: "Ana Silva",
        altura: 1.65,
        peso: 60
    },
    {
        nome: "Bruno Costa",
        altura: 1.80,
        peso: 95
    },
    {
        nome: "Carla Dias",
        altura: 1.60,
        peso: 45
    },
    {
        nome: "Daniel Meireles",
        altura: 1.75,
        peso: 72
    },
    {
        nome: "Elisa Borges",
        altura: 1.68,
        peso: 92
    }
];

/* Arrow Function */
const calcularIMC = (massa, altura)=>{
    return massa/(altura*altura);
}

/* Função Padrão*/
function gerarRelatorio(){
    const tabelaResultado = document.getElementById('resultado-tabela');
    tabelaResultado.innerHTML=''

    /* Ação Principal - Percorrendo Lista */
    for(let i = 0; i < pacientes.length; i++){
        massa = pacientes[i].peso;
        altura = pacientes[i].altura;
        let imc = calcularIMC(massa, altura)
        let situacao = ''

        /* Lógica de Classificação */
        switch(true){
            case (imc<18.5):
                situacao='Abaixo do peso'
                break;
            case (imc<24.9):
                situacao='Peso normal'
                break;
            case (imc<29.9):
                situacao='Sobrepeso'
                break;
            case (imc<34.9):
                situacao='Obesidade Grau I'
                break;
            case (imc<39.9):
                situacao='Obesidade Grau II'
                break;
            default:
                situacao='Obesidade Grau III'
                break;
        }

        /* Geração dinâmica */
        const linha = document.createElement('tr');

        const celulaNome = document.createElement('td');
        celulaNome.textContent = pacientes[i].nome;

        const celulaIMC = document.createElement('td');
        celulaIMC.textContent = imc.toFixed(2);

        const celulaSituacao = document.createElement('td');
        celulaSituacao.textContent = situacao;

        linha.appendChild(celulaNome);
        linha.appendChild(celulaIMC);
        linha.appendChild(celulaSituacao);
        tabelaResultado.appendChild(linha);
    }
}

/* Função Anônima */
document.getElementById('gerar-relatorio').addEventListener('click', function(){
    gerarRelatorio();
});