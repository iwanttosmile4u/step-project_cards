import { Input } from "../elements/input";
import { Textarea } from "../elements/textarea";

export class CardiologistForm {
  renderFields() {
    const formBlock = document.querySelector("#additional-fields");

    const diseasesTextarea = new Textarea({
      name: "diseases",
      classList: ["form-control"],
      ariaLabel: "With textarea",
    });

    const pressureInput = new Input({
      name: "bp",
      type: "text",
      value: "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const massIndexInput = new Input({
      name: "weight",
      type: "text",
      value: "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const ageInput = new Input({
      name: "age",
      type: "number",
      value: "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    formBlock.innerHTML = `
        <p class="mb-2 mt-3 fw-bold">Medium blood pressure:</p>
        <div class="input-group mb-3 mt-2">
            ${pressureInput.render()}
        </div>
        <p class="mb-2 mt-3 fw-bold">Body mass index:</p>
        <div class="input-group mb-3 mt-2">
            ${massIndexInput.render()}
        </div>
        <p class="mb-2 mt-3 fw-bold">Diseases of the cardiovascular system:</p>
        <div class="input-group">
            ${diseasesTextarea.render()}
        </div>
        <p class="mb-2 mt-3 fw-bold">Age:</p>
        <div class="input-group mb-3 mt-2">
            ${ageInput.render()}
        </div>`;
  }
}
