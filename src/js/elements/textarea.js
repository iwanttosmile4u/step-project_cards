export class Textarea {
  constructor({ classList = [], ariaLabel = "" }) {
    this.classList = classList;
    this.ariaLabel = ariaLabel;
  }

  render() {
    return `<textarea class="${this.classList.join(" ")}" aria-label="${
      this.ariaLabel
    }"></textarea>`;
  }
}
