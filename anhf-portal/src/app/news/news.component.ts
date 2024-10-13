import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  template: `
    <div class=" mt-20">
      <div class="max-w-6xl mx-auto py-10">
        <div class="py-10  rounded-xl bg-white text-black font-medium px-10 ">
          <p class="md:text-5xl text-center text-3xl font-light">
            News and Articles
          </p>

          <p class="md:text-2xl text-xl text-center font-light">
            At Alfayo Nelson Hope Foundation, our impactful programs have been
            well received by the community, with many embracing the
            opportunities we offer for growth and support. Our initiatives aim
            to create positive change and uplift those in need, fostering a
            spirit of unity and resilience. We are excited to share updates on
            our recent activities and achievements as we continue to work
            towards a brighter future for our Community. Stay informed about our
            latest developments and stories of hope by exploring the links
            below.
          </p>
          <div class="flex flex-col pt-3 gap-10 ">
            <div class="col-span-1 md:grid grid-cols-3 gap-10">
              <a
                href="https://youtu.be/eXxH4hyL7ZM?si=x9--skAYaUkDqxiN"
                class="col-span-1 rounded-xl border flex flex-col justify-center"
                ><img
                  src="https://img.youtube.com/vi/eXxH4hyL7ZM/hqdefault.jpg"
                  class="col-span-1 rounded-xl border flex flex-col justify-center"
                />
                <p class="text-2xl font-light break-words p-4">
                  Alfayo at Nyali daily show podcast
                </p>
              </a>
              <a
                href="https://youtu.be/V2nv269tm5A?si=VW2dt8gscJUxVAMa"
                class="col-span-1 rounded-xl border flex flex-col justify-center"
                ><img
                  src="https://img.youtube.com/vi/V2nv269tm5A/hqdefault.jpg"
                  class="col-span-1 rounded-xl border flex flex-col justify-center"
                />
                <p class="text-2xl font-light break-words p-4">
                  Alfayo at Sauti ya Pwani Fm
                </p>
              </a>
              <a
                href="https://youtu.be/vcKouzu7FkQ?si=f1QXMR0jHyN5VR3y"
                class="col-span-1 rounded-xl border flex flex-col justify-center"
                ><img
                  src="https://img.youtube.com/vi/vcKouzu7FkQ/hqdefault.jpg"
                  class="col-span-1 rounded-xl border flex flex-col justify-center"
                />
                <p class="text-2xl font-light break-words p-4">
                  Alfayo at Freretown Event
                </p>
              </a>
              <a
                href="https://youtu.be/KnQTKqXeP8c?si=B-Y8Hc_19hCHVnPh"
                class="col-span-1 rounded-xl border flex flex-col justify-center"
                ><img
                  src="https://img.youtube.com/vi/KnQTKqXeP8c/hqdefault.jpg"
                  class="col-span-1 rounded-xl border flex flex-col justify-center"
                />
                <p class="text-2xl font-light break-words p-4">
                  Alfayo at St Elizabeth School
                </p>
              </a>
              <a
                href="https://youtu.be/JuPvfHhtpKs?si=FjLK-D6aLGIkR9r6"
                class="col-span-1 rounded-xl border flex flex-col justify-center"
                ><img
                  src="https://img.youtube.com/vi/JuPvfHhtpKs/hqdefault.jpg"
                  class="col-span-1 rounded-xl border flex flex-col justify-center"
                />
                <p class="text-2xl font-light break-words p-4">
                  I will stand with the Community
                </p>
              </a>
              <a
                href="https://youtu.be/xEgKbvkLPDs?si=aoaOIM-UFQpzpJz0"
                class="col-span-1 rounded-xl border flex flex-col justify-center"
                ><img
                  src="https://img.youtube.com/vi/xEgKbvkLPDs/hqdefault.jpg"
                  class="col-span-1 rounded-xl border flex flex-col justify-center"
                />
                <p class="text-2xl font-light break-words p-4">
                  Champion Of The people
                </p>
              </a>
              <a
                href="https://youtu.be/xEgKbvkLPDs?si=aoaOIM-UFQpzpJz0"
                class="col-span-1 rounded-xl border flex flex-col justify-center"
                ><img
                  src="https://img.youtube.com/vi/xEgKbvkLPDs/hqdefault.jpg"
                  class="col-span-1 rounded-xl border flex flex-col justify-center"
                />
                <p class="text-2xl font-light break-words p-4">
                  My community is my pride
                </p>
              </a>
              <a
                href="https://youtu.be/YWHVfzvvRFo?si=ON1uENFD0Xk4rVb6"
                class="col-span-1 rounded-xl border flex flex-col justify-center"
                ><img
                  src="https://img.youtube.com/vi/YWHVfzvvRFo/hqdefault.jpg"
                  class="col-span-1 rounded-xl border flex flex-col justify-center"
                />
                <p class="text-2xl font-light break-words p-4">
                  Alfayo at Msenangu fm
                </p>
              </a>
              <a
                href="https://youtu.be/O2R1f6Gr-ww?si=IMq0behe_cXvm0O7"
                class="col-span-1 rounded-xl border flex flex-col justify-center"
                ><img
                  src="https://img.youtube.com/vi/O2R1f6Gr-ww/hqdefault.jpg"
                  class="col-span-1 rounded-xl border flex flex-col justify-center"
                />
                <p class="text-2xl font-light break-words p-4">
                  Alfayo in radio
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './news.component.css',
})
export class NewsComponent {}
