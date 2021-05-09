export class Visit {
  goal;
  description;
  urgency;
  fullName;
  title;
  id;

  getInfo() {
    return [
      { name: "Goal", value: this.goal },
      { name: "Description", value: this.description },
      { name: "Urgency", value: this.urgency },
      { name: "Full Name", value: this.fullName },
    ];
  }

  exchange(object) {
    this.goal = object.goal;
    this.description = object.description;
    this.urgency = object.urgency;
    this.fullName = object.fullName;
    this.title = object.title;
    this.id = object.id;
  }
}
