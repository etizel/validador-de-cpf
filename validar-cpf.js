export default class ValidarCPF {
  constructor(element) {
    this.element = element;
  }
  clean(cpf) {
    return cpf.replace(/\D/g, '');
  }
  construct(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
  format(cpf) {
    const cpfClean = this.clean(cpf);
    return this.construct(cpfClean);
  }

  validateOnChange(cpfElement) {
    console.log(this.format(cpfElement.value));
  }

  addEvent() {
    this.element.addEventListener('change', () => {
      this.validateOnChange(this.element);
    });
  }
  start() {
    this.addEvent();
  }
}
