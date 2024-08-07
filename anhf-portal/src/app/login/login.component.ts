// import { Component } from '@angular/core';

// import { Auth } from '@angular/fire/auth';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   template: ` <div class="login-form-flex"></div> `,
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent {
//   private auth = inject(Auth);
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit(loginForm)" #loginForm="ngForm">
      <input type="email" name="email" ngModel placeholder="Email" required />
      <input
        type="password"
        name="password"
        ngModel
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any) {
    const { email, password } = form.value;
    this.authService
      .signIn(email, password)
      .then(() => {
        console.log('User signed in');
        this.router.navigate(['portal']);
      })
      .catch((error) => console.error('Error signing in', error));
  }
}
