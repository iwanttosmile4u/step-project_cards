import { Input } from "../elements/input";

export class TherapistForm {
  constructor(visit) {
    this.visit = visit;
  }

  renderFields() {
    const formBlock = document.querySelector("#additional-fields");

    const ageInput = new Input({
      name: "age",
      type: "number",
      value: this.visit.age || "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    formBlock.innerHTML = `
        <p class="mb-2 mt-3 fw-bold">Age:</p>
        <div class="input-group mb-3 mt-2">
            ${ageInput.render()}
        </div>`;
  }
}
