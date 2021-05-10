import { LoginModal } from "./modals/login";
import { User as UserApi } from "./api/user";
import { Storage } from "./api/storage";
import { createCardModal } from "./modals/card-form";

import "../assets/bootstrap/css/bootstrap.min.css";
import "../scss/style.scss";
import { Cards } from "./api/cards";
import { VisitFactory } from "./objects/visitFactory";
import { Card } from "./elements/card";
import { Filters } from "./filters";

export class Application {
  constructor() {
    this.storage = new Storage();
    this.cardsApi = new Cards();
    this.filters = new Filters();
    this.setupEvents();
    this.filters.setupFilters();
    if (this.storage.token) {
      this.fetchCards();
      this.hideLoginButton();
    }
  }

  fetchCards() {
    this.cardsApi.getAll(Application.renderVisits);
  }

  static renderVisits(objects) {
    const visits = objects.map(VisitFactory.getVisit);
    const renderBlock = document.querySelector("#cards-block");
    renderBlock.innerHTML = "";
    if (!objects || !objects.length) {
      Application.setNoItemsTextIfNeeded();
    }

    visits.forEach((visit) => {
      const card = new Card(visit);
      renderBlock.innerHTML += card.render();
    });
  }

  static setNoItemsTextIfNeeded() {
    const renderBlock = document.querySelector("#cards-block");
    if (renderBlock.querySelector(".card")) {
      return;
    }
    renderBlock.innerHTML = "No items have been added";
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
            Application.setNoItemsTextIfNeeded();
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
