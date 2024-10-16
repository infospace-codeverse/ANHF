import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-the-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  template: `
    <mat-toolbar class="nav-bar border">
      <span class="open-icon" (click)="openNav()">&#9776;</span>
      <div id="myNav" class="overlay" [ngStyle]="{ width: overlayWidth }">
        <a href="javascript:void(0)" class="closebtn" (click)="closeNav()"
          >&times;</a
        >
        <div class="overlay-content">
          <a
            mat-button
            class="menu-item"
            routerLink="/home"
            (click)="closeNav()"
            >Home</a
          >
          <a mat-button class="menu-item" routerLink="/about"
            ><h6 class="text" (click)="closeNav()">About</h6></a
          >
          <!-- <a mat-button class="menu-item" routerLink="/foundation"
            ><h6 class="text" (click)="closeNav()">Foundation</h6></a
          > -->
          <a mat-button class="menu-item">
            <button mat-button [matMenuTriggerFor]="menu">
              <h6 class="text text-gray-400">Initiatives</h6>
            </button>
            <mat-menu #menu="matMenu" class="bg-white">
              <button
                mat-menu-item
                (click)="closeNav()"
                routerLink="/education-initiative"
              >
                Eduaction
              </button>
              <button
                mat-menu-item
                (click)="closeNav()"
                routerLink="/ced-initiative"
              >
                Community Economic Development
              </button>
              <button
                mat-menu-item
                (click)="closeNav()"
                routerLink="/health-initiative"
              >
                Health Care
              </button>
              <button
                mat-menu-item
                (click)="closeNav()"
                routerLink="/security-initiative"
              >
                Security
              </button>
            </mat-menu></a
          >
          <a mat-button class="menu-item" routerLink="/news"
            ><h6 class="text" (click)="closeNav()">News</h6></a
          >
          <a mat-button class="menu-item" routerLink="/contact"
            ><h6 class="text" (click)="closeNav()">Contact</h6></a
          >
        </div>
      </div>

      <div routerLink="">
        <img src="../../assets/logo.png" alt="Logo" class="logo" />
      </div>
      <div class="text">
        <a mat-button class="menu-item" routerLink="/home">Home</a>
        <a mat-button class="menu-item" routerLink="/about"
          ><h6 class="text">About</h6></a
        >
        <a mat-button class="menu-item">
          <button mat-button [matMenuTriggerFor]="menu">
            <h6 class="text">Initiatives</h6>
          </button>
          <mat-menu #menu="matMenu" class="bg-white">
            <button mat-menu-item>Eduaction</button>
            <button mat-menu-item>Community Economic Development</button>
            <button mat-menu-item>Health Care</button>
            <button mat-menu-item>Security</button>
          </mat-menu></a
        >
        <a mat-button class="menu-item" routerLink="/news"
          ><h6 class="text">News</h6></a
        >
        <a mat-button class="menu-item" routerLink="/contact"
          ><h6 class="text">Contact</h6></a
        >
      </div>
      <div class="grid grid-cols-2 gap-1">
        <button
          class="border border-[#00afef;] text-[#00afef;] text-sm py-3 px-5 rounded-lg hover:border-orange-500 hover:text-orange-500"
          aria-label="Example icon-button with admin settings icon"
          routerLink="portal/dashboard"
        >
          Portal
        </button>
        <button
          class="bg-[#00afef;] text-white text-sm py-2 px-4 rounded-lg hover:bg-orange-500"
          aria-label="Example icon-button with admin settings icon"
          routerLink="donate"
        >
          Donate
        </button>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./the-header.component.css'], // Reference to your CSS file
})
export class TheHeaderComponent {
  overlayWidth = '0%';

  openNav() {
    this.overlayWidth = '100%';
  }

  closeNav() {
    this.overlayWidth = '0%';
  }
}
