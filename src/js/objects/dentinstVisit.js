import { Visit } from "./visit";

export class DentistVisit extends Visit {
  lastVisitDate;
  getInfo() {
    const info = super.getInfo();
    info.push({ name: "Last Visiti Date", value: this.lastVisitDate });
    return info;
  }

  static getDoctorType() {
    return "Dentist";
  }

  exchange(object) {
    super.exchange(object);
    this.lastVisitDate = object.lastVisitDate;
    this.doctor = DentistVisit.getDoctorType();
  }
}
