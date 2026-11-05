// import Paciente from "./Paciente.js"
// import PacienteConvenio from "./PacienteConvenio.js"

const cadastro = document.getElementById('cadastro')
const tipoDePaciente = document.getElementById('tipo-de-paciente')

cadastro.addEventListener('submit', (e)=>{
    e.preventDefault();

    cadastro.reset()
})