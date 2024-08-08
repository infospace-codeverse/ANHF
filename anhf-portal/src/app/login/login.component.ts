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
    <div id="container">
      <div id="left">
        <!-- <p id="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Vivamus sodales eros non arcu pellentesque convallis.<br />
          Nunc dignissim lectus in malesuada porta.<br />
          Proin ac erat sed urna congue suscipit.<br />
          Morbi aliquet eget nisl id ornare.
        </p> -->
      </div>
      <div id="right">
        <h1 id="login">LogIn</h1>
        <br />
        <form (ngSubmit)="onSubmit(loginForm)" #loginForm="ngForm">
          <input
            type="email"
            name="email"
            id="email"
            class="client-info"
            ngModel
            placeholder="Email"
            required
          />
          <label for="email">Email</label>
          <input
            type="password"
            name="password"
            id="password"
            class="client-info"
            ngModel
            placeholder="Password"
            required
          />
          <label for="password">Password</label>
          <input type="submit" id="submit" class="client-info" value="Submit" />
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css'],
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
