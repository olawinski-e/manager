import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from "./services/auth.service";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ConnexionComponent } from "./pages/connexion/connexion.component";
import { MaterialModule } from "./material/material.module";
import { DesignService } from "./services/design.service";

@NgModule({
  declarations: [AppComponent, ConnexionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule
  ],
  providers: [AuthService, DesignService],
  bootstrap: [AppComponent]
})
export class AppModule {}
