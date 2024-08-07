import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
import { map, Observable, take, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(): Observable<boolean> {
    return this.checkAuthState();
  }

  canActivateChild(): Observable<boolean> {
    return this.checkAuthState();
  }

  private checkAuthState(): Observable<boolean> {
    return this.authService.user$.pipe(
      take(1),
      map(user => {
        console.log('AuthGuard: user state:', user); // Debug log
        if (user) {
          console.log('AuthGuard: authenticated');
          return true;
        } else {
          console.log('AuthGuard: not authenticated, redirecting to login'); // Debug log
          this.router.navigate(['login']);
          return false;
        }
      }),
      catchError(error => {
        console.error('Auth check failed', error);
        this.router.navigate(['login']);
        return of(false);
      })
    );
  }
}
