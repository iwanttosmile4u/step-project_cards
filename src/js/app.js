import { LoginModal } from "./modals/login";
import { User as UserApi } from "./api/user";
import { Storage } from "./api/storage";
import { createCardModal } from "./modals/card-form";

import "../assets/bootstrap/css/bootstrap.min.css";
import "../scss/style.scss";
import { Cards } from "./api/cards";
import { VisitFactory } from "./objects/visitFactory";
import { Card } from "./elements/card";

export class Application {
  constructor() {
    this.storage = new Storage();
    this.cardsApi = new Cards();
    this.setupEvents();
    if (this.storage.token) {
      this.fetchCards();
      this.hideLoginButton();
    }
  }

  fetchCards() {
    this.cardsApi.getAll((objects) => {
      const visits = objects.map(VisitFactory.getVisit);
      const renderBlock = document.querySelector("#cards-block");
      renderBlock.innerHTML = "";
      if (!visits.length) {
        renderBlock.innerHTML = "No items have been added";
      }
      visits.forEach((visit) => {
        const card = new Card(visit);
        renderBlock.innerHTML += card.render();
      });
    });
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
            this.fetchCards();
            document.querySelector("#mainModal button[data-dismiss]").click();
            this.hideLoginButton();
          },
          console.error
        );
      } else if (target.dataset.dismiss === "modal") {
        loginModal.hide();
      }
    };

    document.getElementById("cards-block").onclick = (e) => {
      if (e.target.classList.contains("js-delete-btn")) {
        const id = e.target.closest(".card").dataset.id;
        this.cardsApi.delete(id, () => {
          const existingCard = document.querySelector(`.card[data-id="${id}"]`);
          if (existingCard) {
            existingCard.remove();
          }
        });
        return;
      }
      if (e.target.classList.contains("js-edit-btn")) {
        const id = e.target.closest(".card").dataset.id;
        this.cardsApi.getOne(id, (details) => {
          const visit = VisitFactory.getVisit(details);
          const doctorVisitModal = new createCardModal(visit);
          doctorVisitModal.show();
        });
        return;
      }
    };
  }
}
