export class Select {
  constructor({
    classList = [],
    ariaLabel = "",
    options = [],
    name = "",
    value = "",
  }) {
    this.classList = classList;
    this.ariaLabel = ariaLabel;
    this.options = options;
    this.name = name;
    this.value = value;
  }

  render() {
    return `<select 
    class="${this.classList.join(" ")}" 
    aria-label="${this.ariaLabel}"
    name="${this.name}"
    >
    ${this.options
      .map(
        (option) => `<option 
          ${this.value === option.value ? "selected" : ""} 
          value="${option.value}"
        >
          ${option.text}
        </option>`
      )
      .join("")}
    </select>`;
  }
}
