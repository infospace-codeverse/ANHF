import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <mat-toolbar class="nav-bar">
      <div>
        <img src="../../assets/logo.png" alt="Logo" class="logo" />
      </div>
      <div class="">
        <!-- <a mat-button class="menu-item" routerLink="/home">Home</a> -->
        <a mat-button class="menu-item" routerLink="/about">About</a>
        <a mat-button class="menu-item" routerLink="/foundation">Foundation</a>
        <a mat-button class="menu-item" routerLink="/news">News</a>
        <a mat-button class="menu-item" routerLink="/contact">Contact</a>
      </div>
      <div>
        <button
          mat-icon-button
          class="example-icon"
          aria-label="Example icon-button with admin settings icon"
          routerLink="portal/dashboard"
        >
          <mat-icon>admin_panel_settings</mat-icon>
        </button>
        <a mat-button class="menu-item" routerLink="portal/dashboard">Portal</a>
      </div>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent {}
