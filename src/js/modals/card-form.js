import $, { removeData } from "jquery";
import bootstrap from "bootstrap";
import { Form } from "../forms/form";
import { TherapistForm } from "../forms/therapistForm";
import { DentistForm } from "../forms/dentistForm";
import { CardiologistForm } from "../forms/cardiologistForm";
import { Button } from "../elements/button";
import { Card } from "../elements/card";
import { TherapistVisit } from "../objects/therapistVisit";
import { CardiologistVisit } from "../objects/cardiologistVisit";
import { DentistVisit } from "../objects/dentinstVisit";
import { Cards } from "../api/cards";
import { VisitFactory } from "../objects/visitFactory";

//експортую клас модалки для створення візиту і імпортую потім цей клас в файлі app.js
export class createCardModal {
  constructor(visit = {}) {
    this.cardApi = new Cards();
    this.modalElement = $("#formModal");
    this.render(visit);
    this.doctorSelect = document.querySelector("select.doctor-select");
    this.form = document.querySelector("#formModal form");
  }

  show() {
    this.modalElement.modal("show");
    this.doctorSelect.addEventListener("change", this.onDoctorSelect);
    this.form.addEventListener("submit", this.onSubmit);
  }

  hide() {
    this.modalElement.modal("hide");
    this.doctorSelect.removeEventListener("change", this.onDoctorSelect);
    this.form.removeEventListener("submit", this.onSubmit);
  }

  onDoctorSelect = (event) => {
    this.renderSelectedDocktorFormPart(event.target.value);
  };

  renderSelectedDocktorFormPart(doctor, visit = {}) {
    switch (doctor) {
      case TherapistVisit.getDoctorType():
        new TherapistForm(visit).renderFields();
        break;
      case CardiologistVisit.getDoctorType():
        new CardiologistForm(visit).renderFields();
        break;
      case DentistVisit.getDoctorType():
        new DentistForm(visit).renderFields();
        break;
      default:
        document.querySelector("#additional-fields").innerHTML = "";
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const visit = {};
    $(this.form)
      .serializeArray()
      .forEach(({ name, value }) => {
        visit[name] = value;
      });
    visit.id = this.form.dataset.id;
    if (visit.id) {
      this.cardApi.edit(visit, this.successSubmitCallback);
    } else {
      this.cardApi.create(visit, this.successSubmitCallback);
    }
  };

  successSubmitCallback = (data) => {
    this.hide();
    const existingCard = document.querySelector(`.card[data-id="${data.id}"]`);
    if (existingCard) {
      existingCard.remove();
    }
    const card = VisitFactory.getVisit(data);
    const renderBlock = document.querySelector("#cards-block");
    if (!renderBlock.querySelector(".cards")) {
      renderBlock.innerHTML = "";
    }
    renderBlock.innerHTML += new Card(card).render();
  };

  render(visit) {
    const form = new Form(visit);
    const topCloseButton = new Button({
      type: "button",
      classList: ["btn-close", "m-0"],
      dataDismiss: "modal",
      ariaLabel: "Close",
    });
    this.modalElement.html("");
    this.modalElement.append(
      $(`
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content bg-info text-white">
        <div class="modal-header">
          <h5 class="modal-title text-uppercase fs-4 fw-bold mx-auto" id="exampleModalLabel">Create a visit</h5>
          ${topCloseButton.render()}
        </div>
        <div class="modal-body">
        </div>
      </div>
    </div>
    `)
    );
    this.modalElement.find(".modal-body").append(form.getBody());
    if (visit.doctor) {
      this.renderSelectedDocktorFormPart(visit.doctor, visit);
    }
  }
}
