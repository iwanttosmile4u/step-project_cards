export class Input {
  constructor({
    name,
    type,
    value,
    classList,
    placeholder,
    ariaLabel,
    ariaDescribedby,
  }) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.classList = classList;
    this.placeholder = placeholder;
    this.ariaLabel = ariaLabel;
    this.ariaDescribedby = ariaDescribedby;
  }
  render() {
    return `<input 
    name="${this.name}" 
    value="${this.value}" 
    type="${this.type}" 
    class="${this.classList.join(" ")}" 
    placeholder="${this.placeholder}" 
    aria-label="${this.ariaLabel}" 
    aria-describedby="${this.ariaDescribedby}"
    />`;
  }
}
