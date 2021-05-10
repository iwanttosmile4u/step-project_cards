export class Card {
  #visit;
  constructor(visit) {
    this.#visit = visit;
  }

  render() {
    const id = "card-" + this.#visit.id;
    return `
    <div class="card m-2" style="width: 18rem;" data-id="${this.#visit.id}">
        <div class="card-header text-info text-center text-uppercase font-weight-bold bg-light h4">
            ${this.#visit.doctor} visit
        </div>
        <ul class="list-group list-group-flush collapse" id="${id}">
        ${this.#visit
          .getInfo()
          .map(({ name, value }) => {
            if (!value) {
              return "";
            }
            return `<li class="list-group-item text-secondary">${name}: ${value}</li>`;
          })
          .join("")}
          <li class="mx-auto">
          <button type="button" class="btn btn-info mt-2 mb-2 btn-sm js-edit-btn">Edit</button>
          <button type="button" class="btn btn-danger mt-2 mb-2 btn-sm js-delete-btn">Delete</button>
          </li>
        </ul>
        <a 
            role="button" 
            style="width: 140px;"
            class="collapsed btn btn-secondary mt-2 mx-auto mb-2" 
            data-toggle="collapse" 
            data-target="#${id}" 
            aria-expanded="false" 
            aria-controls="${id}"
        >
        </a>
    </div>
`;
  }
}
