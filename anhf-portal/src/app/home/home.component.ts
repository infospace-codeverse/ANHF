import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <div class="hero">
        <div class="hero-background">
          <img src="../../assets/heron.jpg" alt="Hero background" />
        </div>
        <div class="hero-content">
          <h1>
            Alfayo Nelson Hope foundation making a change in cosatla
            communities, founded with a vision to nurture and empower
          </h1>
          <div class="hero-stats">
            <div class="stat">
              <h1>1000 +</h1>
              <p>children benefited from scholarships in school fee</p>
            </div>

            <div class="stat">
              <h1>2 +</h1>
              <p>Years in operation</p>
            </div>
            <div class="stat">
              <h1>200 +</h1>
              <p>Groups have benefited in help and savings</p>
            </div>
          </div>
        </div>
      </div>
      <div class="about">
        <div class="about-background">
          <img src="../../assets/world.png" alt="Hero background" />
        </div>
        <div class="about-content">
          <h1 style="color:black">
            Welcome to the Alfayo Nelson Hope Foundation. Our mission is to
            bring hope and positive change to the lives of those in need. We are
            dedicated to improving the well-being of individuals and communities
            through various initiatives and programs. Join us in making a
            difference and creating a brighter future for all.
          </h1>
        </div>
      </div>
    </div>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
