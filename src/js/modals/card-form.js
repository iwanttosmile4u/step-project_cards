import $ from "jquery";
import bootstrap from "bootstrap";
import { Form } from "../forms/form";
import { Button } from "../elements/button";

//експортую клас модалки для створення візиту і імпортую потім цей клас в файлі app.js
export class createCardModal {
  constructor() {
    this.modalElement = $("#formModal");
    this.render();
  }

  show() {
    this.modalElement.modal("show");
    // todo: add event listener on doctor select
  }

  hide() {
    this.modalElement.modal("hide");
  }

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
