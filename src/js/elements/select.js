export class Select {
  constructor({ classList = [], ariaLabel = "", options = [], name = "" }) {
    this.classList = classList;
    this.ariaLabel = ariaLabel;
    this.options = options;
    this.name = name;
  }

  render() {
    return `<select 
    class="${this.classList.join(" ")}" 
    aria-label="${this.ariaLabel}"
    name="${this.name}"
    >
    ${this.options
      .map(
        (option) => `<option value="${option.value}">${option.text}</option>`
      )
      .join("")}
    </select>`;
  }
}
