import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PointsEvaluationComponent } from "./points-evaluation/points-evaluation.component";

const routes: Routes = [
  {
    path: "",
    component: PointsEvaluationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetencesRoutingModule {}
