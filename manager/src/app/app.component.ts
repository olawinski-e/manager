import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  template: `
    <div class="waveContainer">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [""],
  providers: []
})
export class AppComponent {
  title = "wa-manager";

  constructor(public authService: AuthService) {}

  doLogin() {}
}
