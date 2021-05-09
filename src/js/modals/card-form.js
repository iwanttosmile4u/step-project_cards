import $ from "jquery";
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
  constructor() {
    this.cardApi = new Cards();
    this.modalElement = $("#formModal");
    this.render();
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
    switch (event.target.value) {
      case TherapistVisit.getDoctorType():
        new TherapistForm().renderFields();
        break;
      case CardiologistVisit.getDoctorType():
        new CardiologistForm().renderFields();
        break;
      case DentistVisit.getDoctorType():
        new DentistForm().renderFields();
        break;
      default:
        document.querySelector("#additional-fields").innerHTML = "";
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    const visit = {};
    $(this.form)
      .serializeArray()
      .forEach(({ name, value }) => {
        visit[name] = value;
      });
    this.cardApi.create(visit, (data) => {
      this.hide();
      const card = VisitFactory.getVisit(data);
      const renderBlock = document.querySelector("#cards-block");
      renderBlock.innerHTML += new Card(card).render();
    });
  };

  render() {
    const form = new Form();
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
  }
}
