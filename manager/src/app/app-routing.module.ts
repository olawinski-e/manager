import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConnexionComponent } from "./pages/connexion/connexion.component";
import { IsConnectedGuard } from "./guards/is-connected.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "app"
  },
  {
    path: "connexion",
    component: ConnexionComponent
  },
  {
    path: "app",
    loadChildren: "./connected-module/connected.module#ConnectedModule",
    canActivate: [IsConnectedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
