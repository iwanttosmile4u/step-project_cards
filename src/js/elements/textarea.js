export class Textarea {
  constructor({ classList = [], ariaLabel = "", name = "", value = "" }) {
    this.classList = classList;
    this.ariaLabel = ariaLabel;
    this.name = name;
    this.value = value;
  }

  render() {
    return `<textarea
     name=${this.name} 
     class="${this.classList.join(" ")}" 
    aria-label="${this.ariaLabel}"
    >${this.value}</textarea>`;
  }
}
