import { Input } from "../elements/input";
import { Select } from "../elements/select";
import { Textarea } from "../elements/textarea";
import { Button } from "../elements/button";
import { CardiologistVisit } from "../objects/cardiologistVisit";
import { DentistVisit } from "../objects/dentinstVisit";
import { TherapistVisit } from "../objects/therapistVisit";

export class Form {
  constructor(visit = {}) {
    this.editMode = !!visit.doctor;
    this.formBlock = document.createElement("form");
    this.formBlock.dataset.id = visit.id || "";
    this.init(visit);
    this.addButtons();
  }

  init(visit) {
    const purposeInput = new Input({
      name: "goal",
      type: "text",
      value: visit.goal || "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const userNameInput = new Input({
      name: "fullName",
      type: "text",
      value: visit.fullName || "",
      classList: ["form-control"],
      placeholder: "",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const doctorSelect = new Select({
      name: "doctor",
      value: visit.doctor || "",
      classList: ["form-select", "doctor-select"],
      ariaLabel: "Default select example",
      options: [
        new Option("", ""),
        new Option(
          CardiologistVisit.getDoctorType(),
          CardiologistVisit.getDoctorType()
        ),
        new Option(DentistVisit.getDoctorType(), DentistVisit.getDoctorType()),
        new Option(
          TherapistVisit.getDoctorType(),
          TherapistVisit.getDoctorType()
        ),
      ],
    });

    const urgencySelect = new Select({
      name: "urgency",
      value: visit.urgency || "",
      classList: ["form-select"],
      ariaLabel: "Default select example",
      options: [
        new Option("High", "high"),
        new Option("Normal", "normal"),
        new Option("Low", "low"),
      ],
    });

    const descriptionTextarea = new Textarea({
      name: "description",
      value: visit.description || "",
      classList: ["form-control"],
      ariaLabel: "With textarea",
    });

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
          <div id="additional-fields"></div>
          `;
  }

  addButtons() {
    const closeBottomButton = new Button({
      type: "button",
      classList: ["btn", "btn-secondary", "submit-form-button"],
      dataDismiss: "modal",
      text: "Close",
    });

    this.formBlock.innerHTML += `
    <div class="modal-footer mx-auto">
    ${closeBottomButton.render()}
    <button 
    type="submit" 
    class="btn btn-primary"
    >
      ${this.editMode ? "Edit" : "Create"}
    </button>
  </div>`;
  }

  getBody() {
    return this.formBlock;
  }
}
