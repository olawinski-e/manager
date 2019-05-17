import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { TechnologiesService } from "src/app/services/technologies.service";
import { Technologies } from "src/app/models/technologies";
import { Subscription, Observable } from "rxjs";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { map, startWith } from "rxjs/operators";

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
  technologiesSubscription: Subscription;
  technologieForm: FormGroup;
  myControl = new FormControl();
  displayedColumns: string[] = ["libelle", "version", "description", "actions"];
  options: string[] = [
    "PHP",
    "JavaScript",
    "Java",
    "HTML",
    "CSS",
    "Canvas",
    "NodeJS",
    "Angular",
    "VueJS",
    "React",
    "Bootstrap",
    "Angular Material",
    "Bulma",
    "AJAX",
    "RubyOnRails",
    ".NET",
    "C/C++",
    "MySQL",
    "Drupal CMS",
    "Wordpress",
    "Python",
    "GIT",
    "Express",
    "Django",
    "Laravel"
  ];
  dataSource = new MatTableDataSource(this.technologiesService.technologies);
  filteredOption: Observable<string[]>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public technologiesService: TechnologiesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.dataSource);
    this.initForm();
    this.technologiesSubscription = this.technologiesService.technologiesSubject.subscribe(
      (technologies: Technologies[]) => {
        this.dataSource = new MatTableDataSource(technologies);
        console.log(technologies);
        this.dataSource.sort = this.sort;
      }
    );
    this.dataSource.sort = this.sort;
    this.filteredOption = this.technologieForm.controls.libelle.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
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

  setDataSourceAttributes() {
    this.dataSource.sort = this.sort;
  }

  private _filter(value: string): string[] {
    const filterValue = value ? value.toLowerCase() : "";

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
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
    const libelle = this.technologieForm.get("libelle").value.toLowerCase();
    const version = this.technologieForm.get("version").value;
    const description = this.technologieForm.get("description").value;
    const newTechnologie = new Technologies(libelle, version);
    newTechnologie.description = description;
    this.technologiesService.createNewTechnologie(newTechnologie);
    this.technologieForm.reset();
  }
}
