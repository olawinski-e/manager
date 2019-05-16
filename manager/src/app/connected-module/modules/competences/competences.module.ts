import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CompetencesRoutingModule } from "./competences-routing.module";
import { PointsEvaluationComponent } from "./points-evaluation/points-evaluation.component";
import { CompetencesComponent } from "./competences.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [CompetencesComponent, PointsEvaluationComponent],
  imports: [
    CommonModule,
    CompetencesRoutingModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule
  ],
  bootstrap: [CompetencesComponent]
})
export class CompetencesModule {
  constructor() {}
}
