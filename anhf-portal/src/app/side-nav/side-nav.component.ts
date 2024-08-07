import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatButtonModule, RouterModule],
  template: `
    <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side" opened>
        <mat-nav-list>
          <a
            mat-list-item
            routerLink="/portal/dashboard"
            routerLinkActive="active"
            >Dashboard</a
          >
          <a
            mat-list-item
            routerLink="/portal/activities"
            routerLinkActive="active"
            >Activities</a
          >
          <a
            mat-list-item
            routerLink="/portal/members"
            routerLinkActive="active"
            >Members</a
          >
          <a
            mat-list-item
            routerLink="/portal/attendance"
            routerLinkActive="active"
            >Attendance</a
          >
          <a
            mat-list-item
            routerLink="/portal/beneficiaries"
            routerLinkActive="active"
            >Beneficiaries</a
          >
        </mat-nav-list>
      </mat-drawer>
      <mat-drawer-content>
        <button type="button" mat-button (click)="drawer.toggle()">
          Toggle sidenav
        </button>
        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `
      .example-container {
        height: 100%;
        // border: 1px solid;
      }
      .example-sidenav {
        width: 250px;
        border: 1px solid;
      }
      .example-sidenav-content {
        padding: 20px;
        border: 1px solid;
      }
    `,
  ],
})
export class SideNavComponent {
  showFiller = false;
}
