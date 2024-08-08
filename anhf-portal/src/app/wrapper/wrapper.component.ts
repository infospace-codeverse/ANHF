import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TheFooterComponent } from '../the-footer/the-footer.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    TheFooterComponent,
  ],
  template: `
    <mat-toolbar class="nav-bar">
      <div routerLink="">
        <img src="../../assets/logo.png" alt="Logo" class="logo" />
      </div>
      <div class="text">
        <!-- <a mat-button class="menu-item" routerLink="/home">Home</a> -->
        <a mat-button class="menu-item" routerLink="/about"
          ><h6 class="text">About</h6></a
        >
        <!-- <a mat-button class="menu-item" routerLink="/foundation"
          ><h6 class="text">foundation</h6></a
        > -->
        <a mat-button class="menu-item" routerLink="/news"
          ><h6 class="text">News</h6></a
        >
        <a mat-button class="menu-item" routerLink="/contact"
          ><h6 class="text">Contact</h6></a
        >
      </div>
      <div>
        <button
          mat-icon-button
          class="example-icon"
          aria-label="Example icon-button with admin settings icon"
          routerLink="portal/dashboard"
        >
          <a mat-button class="menu-item" routerLink="portal/dashboard"
            ><h6 class="text" style="color:white">Portal</h6></a
          >
        </button>
      </div>
    </mat-toolbar>

    <router-outlet></router-outlet>
    <app-the-footer></app-the-footer>
  `,
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent {}
