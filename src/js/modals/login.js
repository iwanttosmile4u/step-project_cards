import bootstrap from "bootstrap";

export class Login {
  constructor() {
    this.modal = new bootstrap.Modal(document.getElementById("mainModal"), {});
  }

  show() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}
