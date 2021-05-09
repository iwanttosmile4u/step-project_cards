import { CardiologistVisit } from "./cardiologistVisit";
import { DentistVisit } from "./dentinstVisit";
import { TherapistVisit } from "./therapistVisit";

export class VisitFactory {
  static getVisit(visit) {
    if (!visit || !visit.doctor) {
      return null;
    }
    let obj;
    switch (visit.doctor) {
      case DentistVisit.getDoctorType():
        obj = new DentistVisit();
        break;
      case TherapistVisit.getDoctorType():
        obj = new TherapistVisit();
        break;
      case CardiologistVisit.getDoctorType():
        obj = new CardiologistVisit();
        break;
      default:
        return null;
    }
    obj.exchange(visit);
    return obj;
  }
}
