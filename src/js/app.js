import { Login } from "./modals/login";
import { User as UserApi } from "./api/user";
import { Storage } from "./api/storage";
import { createCardModal } from "./modals/card-form";

export class Application {
  constructor() {
    this.storage = new Storage();
    this.setupEvents();
  }

  setupEvents() {
    document.querySelector("#loginButton").onclick = () => {
      const loginModal = new Login();
      loginModal.show();
    };

    //по кліку з'являється модалка з формою
    document.querySelector("#createButton").onclick = () => {
      const doctorVisitModal = new createCardModal();
      doctorVisitModal.show();
    };

    document.querySelector(".js-login").onclick = () => {
      const userApi = new UserApi();
      const email = document.querySelector('#mainModal input[name="email"]')
        .value;
      const password = document.querySelector(
        '#mainModal input[name="password"]'
      ).value;

      userApi.login(
        email,
        password,
        (token) => {
          this.storage.token = token;
          document.querySelector("#mainModal button[data-dismiss]").click();
          document.querySelector("#createButton").hidden = false;
          document.querySelector("#loginButton").hidden = true;
        },
        console.error
      );
    };
  }
}
