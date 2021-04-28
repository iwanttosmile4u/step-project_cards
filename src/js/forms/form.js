import { Input } from "../elements/input";
import { Select } from "../elements/select";
import { Textarea } from "../elements/textarea";
import { Button } from "../elements/button";

export class Form {
  constructor() {
    this.init();
  }

  init() {
    const purposeInput = new Input({
      name: "purpose",
      type: "text",
      value: "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const userNameInput = new Input({
      name: "name",
      type: "text",
      value: "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const pressureInput = new Input({
      name: "name",
      type: "text",
      value: "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const massIndexInput = new Input({
      name: "name",
      type: "text",
      value: "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const ageInput = new Input({
      name: "number",
      type: "text",
      value: "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const dateInput = new Input({
      name: "name",
      type: "text",
      value: "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const doctorSelect = new Select({
      classList: ["form-select"],
      ariaLabel: "Default select example",
      options: [
        new Option("Сardiologist", 1),
        new Option("Dentist", 2),
        new Option("Therapist", 3),
      ],
    });

    const urgencySelect = new Select({
      classList: ["form-select"],
      ariaLabel: "Default select example",
      options: [
        new Option("High", 1),
        new Option("Normal", 2),
        new Option("Low", 3),
      ],
    });

    const descriptionTextarea = new Textarea({
      classList: ["form-control"],
      ariaLabel: "With textarea",
    });

    const diseasesTextarea = new Textarea({
      classList: ["form-control"],
      ariaLabel: "With textarea",
    });

    const closeBottomButton = new Button({
      type: "button",
      classList: ["btn", "btn-secondary"],
      dataDismiss: "modal",
      text: "Close",
    });

    this.formBlock = document.createElement("div");
    this.formBlock.innerHTML = `
          <p class="fs-5 fw-bold mb-2">Choose a doctor:</p>
          ${doctorSelect.render()}
          <p class="mb-2 mt-3 fw-bold">Purpose of visit:</p>
          <div class="input-group mb-3 mt-2">
            ${purposeInput.render()}
          </div>
          <p class="mb-2 mt-3 fw-bold">Description of the visit:</p>
          <div class="input-group">
            ${descriptionTextarea.render()}
          </div>
          <p class="mb-2 mt-3 fw-bold">Urgency:</p>
          ${urgencySelect.render()}
          <p class="mb-2 mt-3 fw-bold">First name and last name:</p>
          <div class="input-group mb-3 mt-2">
            ${userNameInput.render()}
          </div>
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
          </div>
          <p class="mb-2 mt-3 fw-bold">Date of last visit:</p>
          <div class="input-group mb-3 mt-2">
            ${dateInput.render()}
          </div>
        </div>
        <div class="modal-footer mx-auto">
          ${closeBottomButton.render()}
          <button type="button" class="btn btn-primary">Create</button>
        </div>
          `;
  }
  getBody() {
    return this.formBlock;
  }
}

/*
<div>
    <p class="fs-5 fw-bold mb-2">Choose a doctor:</p>
    <select class="form-select" aria-label="Default select example">
      <option value="1">Сardiologist</option>
      <option value="2">Dentist</option>
      <option value="3">Therapist</option>
    </select>
    <p class="mb-2 mt-3 fw-bold">Purpose of visit:</p>
    <div class="input-group mb-3 mt-2">
      <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
    </div>
    <p class="mb-2 mt-3 fw-bold">Description of the visit:</p>
    <div class="input-group">
      <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
    <p class="mb-2 mt-3 fw-bold">Urgency:</p>
    <select class="form-select" aria-label="Default select example">
      <option value="1">High</option>
      <option value="2">Normal</option>
      <option value="3">Low</option>
    </select>
    <p class="mb-2 mt-3 fw-bold">First name and last name:</p>
    <div class="input-group mb-3 mt-2">
      <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
    </div>
    <p class="mb-2 mt-3 fw-bold">Medium blood pressure:</p>
    <div class="input-group mb-3 mt-2">
      <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
    </div>
    <p class="mb-2 mt-3 fw-bold">Body mass index:</p>
    <div class="input-group mb-3 mt-2">
      <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
    </div>
    <p class="mb-2 mt-3 fw-bold">Diseases of the cardiovascular system:</p>
    <div class="input-group">
      <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
    <p class="mb-2 mt-3 fw-bold">Age:</p>
    <div class="input-group mb-3 mt-2">
      <input type="number" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
    </div>
    <p class="mb-2 mt-3 fw-bold">Date of last visit:</p>
    <div class="input-group mb-3 mt-2">
      <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
    </div>
  </div>
  <div class="modal-footer mx-auto">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Create</button>
  </div>
  </div>
*/
