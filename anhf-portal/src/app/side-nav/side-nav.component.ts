import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  template: `
    <mat-toolbar class="mat-toolbar">
      <button
        (click)="drawer.toggle()"
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with menu icon"
      >
        <mat-icon>menu</mat-icon>
      </button>
      <span>My App</span>
      <span class="example-spacer"></span>
      <!-- <button
        mat-icon-button
        class="example-icon favorite-icon"
        aria-label="Example icon-button with heart icon"
      >
        <mat-icon>home</mat-icon>
      </button> -->
      <button
        routerLink="/home"
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with share icon"
      >
        <mat-icon>home</mat-icon>
      </button>
    </mat-toolbar>
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
            routerLink="/portal/beneficiaries"
            routerLinkActive="active"
            >Beneficiaries</a
          >
          <a mat-list-item routerLink="/portal/groups" routerLinkActive="active"
            >Group Beneficiaries</a
          >
        </mat-nav-list>
      </mat-drawer>
      <mat-drawer-content class="example-sidenav-content">
        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `
      .mat-toolbar {
        background-color: #edece6;
      }
      .example-spacer {
        flex: 1 1 auto;
      }
      .example-container {
        height: calc(100% - 65px);
        background-color: #edece6;
      }
      .example-sidenav {
        width: 250px;
        background-color: #edece6;
      }
      .example-sidenav-content {
        height: calc(100% - 100px);
        margin: 20px;
        padding: 30px;
        border: 1px solid;
        border-radius: 10px;
        background-color: white;
      }
    `,
  ],
})
export class SideNavComponent {
  showFiller = false;
}
