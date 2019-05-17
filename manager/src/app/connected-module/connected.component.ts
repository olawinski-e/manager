import { Component } from "@angular/core";
import { DesignService } from "../services/design.service";

@Component({
  selector: "app-connected",
  template: `
    <mat-drawer-container class="drawer-container" [hasBackdrop]="false">
      <mat-drawer mode="push" opened>
        <span [routerLink]="['/']" class="logo">
          WA PROFILS <strong>MANAGER</strong>
        </span>
        <nav>
          <ul>
            <li class="group">Collaborateurs</li>
            <li>Liste des collaborateurs</li>
          </ul>

          <ul>
            <li class="group">Grille de salaires</li>
            <li>Voir la grille</li>
            <li>Technologies & Rôles</li>
            <li>Diplômes & Certifications</li>
            <li>Paramètres</li>
          </ul>

          <ul>
            <li class="group">Grille de compétences</li>
            <li>Voir la grille</li>
            <li>Top 15 Web-atrio</li>
            <li>
              <a [routerLink]="['/app/competences']">Points d'évaluation</a>
            </li>
            <li>Barème d'évaluation</li>
          </ul>

          <ul>
            <li class="group">Repas régies</li>
            <li>Saisir un repas de suivis</li>
            <li>Liste des repas</li>
            <li>Repas à venir</li>
            <li>Repas en retard de saisie</li>
          </ul>

          <ul>
            <li class="group">BPI & Achèvements</li>
            <li>Responsables des BPI</li>
            <li>Achèvements par rôles</li>
            <li>Saisir un suivi d'achèvements</li>
            <li>Liste des achèvements</li>
          </ul>

          <ul>
            <li class="group">Administration</li>
            <li>Liste des administrateurs</li>
          </ul>
        </nav>
      </mat-drawer>
      <mat-drawer-content class="margin-right-zero">
        <div style="padding:30px">
          <router-outlet></router-outlet>
        </div>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `
      .drawer-container {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
      }
      nav {
        margin-top: 100px;
      }
      ul li {
        padding-left: 20px;
        line-height: 30px;
      }
      ul li.group {
        padding-left: 0px;
        font-weight: bold;
      }
    `
  ],
  providers: []
})
export class ConnectedComponent {
  constructor(private _designService: DesignService) {}

  doLogin() {}
}
