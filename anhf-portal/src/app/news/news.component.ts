import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  template: `
    <div class="hero">
      <div class="hero-background">
        <img src="../../assets/heron.jpg" alt="Hero background" />
      </div>
      <div class="hero-content">
        <h1>News</h1>
        <!-- <p>
          At Alfayo Nelson Hope Foundation, our impactful programs have been
          well received by the community, with many embracing the opportunities
          we offer for growth and support. Our initiatives aim to create
          positive change and uplift those in need, fostering a spirit of unity
          and resilience. We are excited to share updates on our recent
          activities and achievements as we continue to work towards a brighter
          future for our Community. Stay informed about our latest developments
          and stories of hope by exploring the links below.
        </p> -->
      </div>
    </div>
    <section id="news">
      <img src="../../assets/logo.png" alt="Watermark Logo" class="watermark" />
      <div class="news-content"></div>
      <div class="video-gallery">
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/eXxH4hyL7ZM/hqdefault.jpg');"
        >
          <a href="https://youtu.be/eXxH4hyL7ZM?si=x9--skAYaUkDqxiN"></a>
          <div class="video-description">
            Alfayo at Nyali daily show podcast
          </div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/V2nv269tm5A/hqdefault.jpg');"
        >
          <a href="https://youtu.be/V2nv269tm5A?si=VW2dt8gscJUxVAMa"></a>
          <div class="video-description">Alfayo at Sauti ya Pwani Fm</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/vcKouzu7FkQ/hqdefault.jpg');"
        >
          <a href="https://youtu.be/vcKouzu7FkQ?si=f1QXMR0jHyN5VR3y"></a>
          <div class="video-description">Alfayo at Freretown Event</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/KnQTKqXeP8c/hqdefault.jpg');"
        >
          <a href="https://youtu.be/KnQTKqXeP8c?si=B-Y8Hc_19hCHVnPh"></a>
          <div class="video-description">Alfayo at St Elizabeth School</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/JuPvfHhtpKs/hqdefault.jpg');"
        >
          <a href="https://youtu.be/JuPvfHhtpKs?si=FjLK-D6aLGIkR9r6"></a>
          <div class="video-description">I will stand with the Community</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/xEgKbvkLPDs/hqdefault.jpg');"
        >
          <a href="https://youtu.be/xEgKbvkLPDs?si=aoaOIM-UFQpzpJz0"></a>
          <div class="video-description">Champion Of The people</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/xEgKbvkLPDs/hqdefault.jpg');"
        >
          <a href="https://youtu.be/xEgKbvkLPDs?si=aoaOIM-UFQpzpJz0"></a>
          <div class="video-description">My community is my pride</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/NzEHaiRL6AY/hqdefault.jpg');"
        >
          <a href="https://youtu.be/NzEHaiRL6AY?si=cGyGupPuOGPtxWUa"></a>
          <div class="video-description">Alfayo na Boda boda</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/qSzrWslyo0Q/hqdefault.jpg');"
        >
          <a href="https://youtu.be/qSzrWslyo0Q?si=o5LSWWjoA6QoKXR2"></a>
          <div class="video-description">Karibu Kongowea Alfayo</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/DmHNrI8c-Cg/hqdefault.jpg');"
        >
          <a href="https://youtu.be/DmHNrI8c-Cg?si=-15__DbEDsD51ji-"></a>
          <div class="video-description">My Journey</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/4R1oeiyIk7E/hqdefault.jpg');"
        >
          <a href="https://youtu.be/4R1oeiyIk7E?si=PTJS-CHOSYmEM0rE"></a>
          <div class="video-description">Alfayo na Vijana</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/YWHVfzvvRFo/hqdefault.jpg');"
        >
          <a href="https://youtu.be/YWHVfzvvRFo?si=ON1uENFD0Xk4rVb6"></a>
          <div class="video-description">Alfayo at Msenangu fm</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/MW2pjmeZjos/hqdefault.jpg');"
        >
          <a href="https://youtu.be/MW2pjmeZjos?si=9Jk4YkVOlX70uB4-"></a>
          <div class="video-description">Alfayo Soccer Beach</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/7ZGAY3g7UuQ/hqdefault.jpg');"
        >
          <a href="https://youtu.be/7ZGAY3g7UuQ?si=MefXr7K3AmdCQpZd"></a>
          <div class="video-description">Meeting ACCs & Chiefs</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/CjTgEI71p3s/hqdefault.jpg');"
        >
          <a href="https://youtu.be/CjTgEI71p3s?si=_jmgSjv4vPsjpr2d"></a>
          <div class="video-description">Alfayo at Viena Ziwa la Ng'ombe</div>
        </div>
        <div
          class="video-box"
          style="background-image: url('https://img.youtube.com/vi/O2R1f6Gr-ww/hqdefault.jpg');"
        >
          <a href="https://youtu.be/O2R1f6Gr-ww?si=IMq0behe_cXvm0O7"></a>
          <div class="video-description">Alfayo at Msenangu fm</div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './news.component.css',
})
export class NewsComponent {}
