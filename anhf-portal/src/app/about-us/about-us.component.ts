import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  template: `
    <div class="hero">
      <div class="hero-background">
        <img src="../../assets/heron.jpg" alt="Hero background" />
      </div>
      <div class="hero-content">
        <h1>Who We Are</h1>
        <!-- <p>
          
        </p> -->
      </div>
    </div>
    <div class="about">
      <div class="about-background">
        <img src="../../assets/world.png" alt="Hero background" />
      </div>
      <div class="about-content">
        <h1 style="color:black">
          At Alfayo Nelson Hope Foundation, our impactful programs have been
          well received by the community, with many embracing the opportunities
          we offer for growth and support. Our initiatives aim to create
          positive change and uplift those in need, fostering a spirit of unity
          and resilience. We are excited to share updates on our recent
          activities and achievements as we continue to work towards a brighter
          future for our Community. Stay informed about our latest developments
          and stories of hope by exploring the links below.
        </h1>
      </div>
    </div>
    
  `,
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
