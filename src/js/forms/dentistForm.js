import { Input } from "../elements/input";

export class DentistForm {
  constructor(visit) {
    this.visit = visit;
  }

  renderFields() {
    const formBlock = document.querySelector("#additional-fields");

    const dateInput = new Input({
      name: "lastVisitDate",
      type: "text",
      value: this.visit.lastVisitDate || "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    formBlock.innerHTML = `
        <p class="mb-2 mt-3 fw-bold">Date of last visit:</p>
        <div class="input-group mb-3 mt-2">
            ${dateInput.render()}
        </div>`;
  }
}
