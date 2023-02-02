import ValidarCPF from './validar-cpf.js';

const cpf = document.querySelector('#cpf');

const validarCpf = new ValidarCPF(cpf);

console.log(validarCpf.format('22222222222'));
