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
    const loginModal = new Login();
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
            document.querySelector("#createButton").hidden = false;
            document.querySelector("#loginButton").hidden = true;
          },
          console.error
        );
      } else if (target.dataset.dismiss === "modal") {
        loginModal.hide();
      }
    };
  }
}
