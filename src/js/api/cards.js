import { Storage } from "./storage";

export class Cards {
  #storage;
  constructor() {
    this.#storage = new Storage();
  }

  getAll(callback, errorCallback = console.error) {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#storage.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          errorCallback(response);
        } else {
          return response.json();
        }
      })
      .then((cards) => {
        if (cards) {
          callback(cards);
        }
      })
      .catch(errorCallback);
  }
}
