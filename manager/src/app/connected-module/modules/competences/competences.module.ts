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
import { MatButtonModule } from "@angular/material/button";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

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
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  bootstrap: [CompetencesComponent]
})
export class CompetencesModule {
  constructor() {}
}
