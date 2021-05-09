import { Visit } from "./visit";

export class CardiologistVisit extends Visit {
  bp;
  weight;
  diseases;
  age;

  getInfo() {
    const info = super.getInfo();
    info.push(
      { name: "BP", value: this.bp },
      { name: "Weight", value: this.weight },
      { name: "Diseases", value: this.diseases },
      { name: "Age", value: this.age }
    );
    return info;
  }

  static getDoctorType() {
    return "Cardiologist";
  }

  exchange(object) {
    super.exchange(object);
    this.bp = object.bp;
    this.weight = object.weight;
    this.diseases = object.diseases;
    this.age = object.age;
    this.doctor = CardiologistVisit.getDoctorType();
  }
}
