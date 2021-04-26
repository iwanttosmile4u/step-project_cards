import bootstrap from "bootstrap";

//експортую клас модалки для створення візиту і імпортую потім цей клас в файлі app.js
export class createCardModal {
  constructor() {
    this.cardModal = new bootstrap.Modal(
      document.getElementById("formModal"),
      {}
    );
  }
  show() {
    this.cardModal.show();
  }

  hide() {
    this.cardModal.hide();
  }
}
