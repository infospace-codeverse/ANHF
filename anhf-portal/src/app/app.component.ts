import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { RouterModule } from '@angular/router';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- <div *ngIf="user; else notLoggedIn">
      <p>Welcome, {{ user.email }}</p>
      <button (click)="signOut()">Sign Out</button>
    </div>
    <ng-template #notLoggedIn>
      <a routerLink="/login">Login</a>
    </ng-template> -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  user: User | null = null;

  constructor(private authService: AuthService) {
    this.authService.user$.subscribe(user => this.user = user);
  }

  signOut() {
    this.authService.signOut();
  }
}
