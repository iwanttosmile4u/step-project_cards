export class Textarea {
  constructor({ classList = [], ariaLabel = "", name = "" }) {
    this.classList = classList;
    this.ariaLabel = ariaLabel;
    this.name = name;
  }

  render() {
    return `<textarea name=${this.name} class="${this.classList.join(
      " "
    )}" aria-label="${this.ariaLabel}"></textarea>`;
  }
}
