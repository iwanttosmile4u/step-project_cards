export class Select {
  constructor({ classList = [], ariaLabel = "", options = [] }) {
    this.classList = classList;
    this.ariaLabel = ariaLabel;
    this.options = options;
  }

  render() {
    return `<select class="${this.classList.join(" ")}" aria-label="${
      this.ariaLabel
    }">
    ${this.options
      .map(
        (option) => `<option value="${option.value}">${option.text}</option>`
      )
      .join("")}
    </select>`;
  }
}
