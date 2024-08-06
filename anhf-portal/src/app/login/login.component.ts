import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <section id="portal" class="section-bg-light-blue">
      <img src="logo.png" alt="Watermark Logo" class="watermark" />
      <div class="portal-form">
        <h2>Portal Login</h2>

        <form action="login.php" method="post">
          <br /><input
            type="text"
            name="membership_id"
            placeholder="Membership ID"
            required
          />
          <br /><input
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <br /><input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <br /><button type="submit">Login</button>
        </form>
      </div>
    </section>
  `,
  styleUrl: './login.component.css',
})
export class LoginComponent {}
