export class Button {
  constructor({
    type = "",
    classList = [],
    dataDismiss = "",
    ariaLabel = "",
    text = "",
  }) {
    this.type = type;
    this.classList = classList;
    this.dataDismiss = dataDismiss;
    this.ariaLabel = ariaLabel;
    this.text = text;
  }
  render() {
    return `<button type="${this.type}" 
    class="${this.classList.join(" ")}" 
    data-bs-dismiss="${this.dataDismiss}" 
    aria-label="${this.ariaLabel}">${this.text}</button>`;
  }
}
