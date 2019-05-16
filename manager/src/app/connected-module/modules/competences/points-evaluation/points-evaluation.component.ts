import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TechnologiesService } from "src/app/services/technologies.service";
import { Technologies } from "src/app/models/technologies";
import { Subscription } from "rxjs";

export interface Technologies {
  libelle: string;
  version: number;
  description: string;
}

@Component({
  selector: "app-points-evaluation",
  templateUrl: "./points-evaluation.component.html",
  styleUrls: ["./points-evaluation.component.scss"]
})
export class PointsEvaluationComponent implements OnInit, OnDestroy {
  technologies: Technologies[];
  technologiesSubscription: Subscription;
  technologieForm: FormGroup;
  displayedColumns: string[] = ["libelle", "version", "description", "actions"];

  constructor(
    public technologiesService: TechnologiesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.technologiesSubscription = this.technologiesService.technologiesSubject.subscribe(
      (technologies: Technologies[]) => {
        this.technologies = technologies;
        console.log(technologies);
      }
    );
  }

  initForm() {
    console.log("initForm ok");
    this.technologieForm = this.formBuilder.group({
      libelle: ["", Validators.required],
      version: ["", Validators.required],
      description: ""
    });
  }

  onDeleteTechnologie(technologies: Technologies) {
    console.log("onDeleteTechnologie ok");
    this.technologiesService.removeTechnologie(technologies);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy ok");
    this.technologiesSubscription.unsubscribe();
  }

  onSaveTechnologie() {
    console.log("onSavetechnologie ok");
    console.log(this.technologieForm);
    const libelle = this.technologieForm.get("libelle").value;
    const version = this.technologieForm.get("version").value;
    const description = this.technologieForm.get("description").value;
    const newTechnologie = new Technologies(libelle, version);
    newTechnologie.description = description;

    this.technologiesService.createNewTechnologie(newTechnologie);
  }
}
