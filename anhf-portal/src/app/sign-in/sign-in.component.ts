import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit(signInForm)" #signInForm="ngForm">
      <input type="email" name="email" ngModel placeholder="Email" required />
      <input
        type="password"
        name="password"
        ngModel
        placeholder="Password"
        required
      />
      <button type="submit">Sign In</button>
    </form>
  `,
})
export class SignInComponent {
  constructor(private authService: AuthService) {}

  onSubmit(form: any) {
    const { email, password } = form.value;
    this.authService
      .signIn(email, password)
      .then(() => console.log('User signed in'))
      .catch((error) => console.error('Error signing in', error));
  }
}
