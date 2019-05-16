import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { ConnectedComponent } from "./connected.component";

const routes: Routes = [
  {
    path: "",
    component: ConnectedComponent,
    children: [
      {
        path: "competences",
        loadChildren:
          "./modules/competences/competences.module#CompetencesModule"
      },
      {
        path: "",
        component: AccueilComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectedRoutingModule {}
