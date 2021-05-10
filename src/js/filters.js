import { Cards } from "./api/cards";
import { Application } from "./app";

export class Filters {
  description;
  urgency;

  constructor() {
    this.description = document.querySelector("#description-filter");
    this.urgency = document.querySelector("#urgency-filter");
    this.api = new Cards();
  }
  setupFilters() {
    this.description.addEventListener("input", this.onFilter);
    this.urgency.addEventListener("change", this.onFilter);
  }

  onFilter = (e) => {
    this.api.getAll(this.filterVisits);
  };

  filterVisits = (visits) => {
    if (!visits || !visits.length) {
      return;
    }
    if (this.urgency.value) {
      visits = visits.filter(({ urgency }) => urgency === this.urgency.value);
    }

    if (this.description.value) {
      visits = visits.filter(({ description = "" }) =>
        description.includes(this.description.value)
      );
    }

    if (visits) {
      Application.renderVisits(visits);
    }
  };
}
