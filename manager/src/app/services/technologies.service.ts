import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Technologies } from "src/app/models/technologies";

import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: "root"
})
export class TechnologiesService {
  technologies: Technologies[] = [];
  technologiesSubject = new Subject<Technologies[]>();

  constructor() {
    this.getTechnologies();
  }

  emitTechnologies() {
    this.technologiesSubject.next(this.technologies);
  }

  saveTechnologies() {
    firebase
      .database()
      .ref("/technologies")
      .set(this.technologies);
  }

  getTechnologies() {
    firebase
      .database()
      .ref("/technologies")
      .on("value", (data: DataSnapshot) => {
        console.log("firebase technos", data.val());
        this.technologies = data.val() ? data.val() : [];
        this.emitTechnologies();
      });
  }

  createNewTechnologie(newTechnologie: Technologies) {
    this.technologies.push(newTechnologie);
    this.saveTechnologies();
    this.emitTechnologies();
  }

  removeTechnologie(technologies: Technologies) {
    const technologieIndexToRemove = this.technologies.findIndex(
      technologieEl => {
        if (technologieEl === technologies) {
          return true;
        }
      }
    );
    this.technologies.splice(technologieIndexToRemove, 1);
    this.saveTechnologies();
    this.emitTechnologies();
  }
}
