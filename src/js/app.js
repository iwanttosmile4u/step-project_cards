import { LoginModal } from "./modals/login";
import { User as UserApi } from "./api/user";
import { Storage } from "./api/storage";
import { createCardModal } from "./modals/card-form";

import "../assets/bootstrap/css/bootstrap.min.css";
import "../scss/style.scss";

export class Application {
  constructor() {
    this.storage = new Storage();
    this.setupEvents();
    if (this.storage.token) {
      this.hideLoginButton();
    }
  }

  hideLoginButton() {
    document.querySelector("#createButton").hidden = false;
    document.querySelector("#loginButton").hidden = true;
  }

  setupEvents() {
    const loginModal = new LoginModal();
    document.querySelector("#loginButton").onclick = () => {
      loginModal.show();
    };

    //по кліку з'являється модалка з формою
    document.querySelector("#createButton").onclick = () => {
      const doctorVisitModal = new createCardModal();
      doctorVisitModal.show();
    };

    document.getElementById("mainModal").onclick = (e) => {
      const target = e.target;

      if (target.classList.contains("js-login")) {
        const userApi = new UserApi();
        const email = document.querySelector('#mainModal input[name="email"]')
          .value;
        const password = document.querySelector(
          '#mainModal input[name="password"]'
        ).value;
        console.log(email, password);
        userApi.login(
          email,
          password,
          (token) => {
            this.storage.token = token;
            document.querySelector("#mainModal button[data-dismiss]").click();
            this.hideLoginButton();
          },
          console.error
        );
      } else if (target.dataset.dismiss === "modal") {
        loginModal.hide();
      }
    };
  }
}
