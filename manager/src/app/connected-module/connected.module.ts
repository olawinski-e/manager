import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConnectedRoutingModule } from "./connected-routing.module";
import { ConnectedComponent } from "./connected.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [ConnectedComponent, AccueilComponent],
  imports: [CommonModule, ConnectedRoutingModule, MaterialModule],
  bootstrap: [ConnectedComponent]
})
export class ConnectedModule {}
