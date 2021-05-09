import { Visit } from "./visit";

export class TherapistVisit extends Visit {
  age;
  getInfo() {
    const info = super.getInfo();
    info.push({ name: "Age", value: this.age });
    return info;
  }

  static getDoctorType() {
    return "Therapist";
  }

  exchange(object) {
    super.exchange(object);
    this.age = object.age;
    this.doctor = TherapistVisit.getDoctorType();
  }
}
