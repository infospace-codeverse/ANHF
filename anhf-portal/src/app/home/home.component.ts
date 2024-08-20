import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class=" mt-20">
      <div
        class="w-full md:h-[600px] h-96 bg-cover bg-center flex flex-col  justify-center"
        style="background-image: url('../../assets/heron.jpg')"
      >
        <div
          class="bg-black px-4 bg-opacity-70 w-full h-full flex flex-col justify-center "
        >
          <div class="max-w-5xl md:px-48">
            <p class="text-white text-4xl lg:text-4xl max-w-4xl uppercase">
              Alfayo Nelson Hope foundation
            </p>
            <p class="text-white text-xl lg:text-2xl max-w-4xl font-light">
              Making a change in coastal communities, founded with a vision to
              nurture and empower
            </p>
            <button
              routerLink="/about"
              class="bg-white text-black text-sm font-medium px-10 py-3 rounded-3xl shadow-md"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto text-center">
        <div
          class="border shadow-2xl md:-translate-y-1/2 rounded-xl bg-white text-black font-medium px-10 py-10 "
        >
          <div class="lg:grid grid-cols-3 flex flex-col">
            <div class="col-span-1">
              <p class="text-5xl text-orange-500 font-light">1000+</p>
              <p class="text-xl font-light">
                Children benefited from scholarships in school fee
              </p>
            </div>
            <div class="col-span-1">
              <p class="text-5xl text-[#00afef;] font-light">2+</p>
              <p class="text-xl font-light">Years in operation</p>
            </div>
            <div class="col-span-1">
              <p class="text-5xl text-red-500 font-light">200+</p>
              <p class="text-xl font-light">
                Groups have benefited in help and savings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full h-[500px] lg:h-[350px] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style="background-image: url('../../assets/world.png')"
      >
        <div
          class="bg-white bg-opacity-90 w-full h-full flex flex-col items-center justify-center p-4"
        >
          <div class="max-w-5xl">
            <p class="text-black text-xl lg:text-3xl mb-4 font-light">
              Welcome to the Alfayo Nelson Hope Foundation. Our mission is to
              bring hope and positive change to the lives of those in need. We
              are dedicated to improving the well-being of individuals and
              communities through various initiatives and programs. Join us in
              making a difference and creating a brighter future for all.
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto py-20">
        <div class="lg:grid grid-cols-7 gap-10">
          <div
            class="col-span-4 w-full bg-cover bg-center rounded-xl"
            style="background-image: url('../../assets/heron.jpg')"
          >
            <div
              class="bg-black px-4 bg-opacity-70 w-full h-full flex flex-col justify-center md:rounded-xl"
            >
              <div class="max-w-5xl md:px-24 px-1 py-20">
                <p class="text-white text-4xl lg:text-4xl max-w-4xl uppercase">
                  EDUCATION
                </p>
                <p class="text-white text-xl lg:text-2xl max-w-4xl font-light">
                  Education plays a crucial role in fostering economic
                  development, and making investments in education and skills
                  development in Kenya would result in a significant boost to
                  the country's overall economic growth. Offering young
                  individuals a top-notch education sets them up for success in
                  the job market and empowers them to lead fulfilling and
                  prosperous lives
                </p>
                <button
                  routerLink="/about"
                  class="bg-white text-black text-sm font-medium px-10 py-3 rounded-3xl shadow-md"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <div class="border-b p-5">
              <p class="text-xl">Educational Sponsorships</p>
              <p class="text-lg font-light">
                ANHF is proud to have sponsored over 1,000 students across
                various levels of education—primary, secondary, and tertiary.
              </p>
            </div>
            <div class="border-b p-5">
              <p class="text-xl">Sports and Extracurricular Activities</p>
              <p class="text-lg font-light">
                Recognizing the importance of holistic development, ANHF has
                also sponsored students in sports and extracurricular
                activities.
              </p>
            </div>
            <div class="border-b p-5">
              <p class="text-xl">Technology and Digital Literacy</p>
              <p class="text-lg font-light">
                ANHF has been instrumental in supplying computers to schools in
                the region, ensuring that students have the tools they need to
                succeed in an increasingly digital world.
              </p>
            </div>
            <div class="border-b p-5">
              <p class="text-xl">Partnerships for Vocational Training</p>
              <p class="text-lg font-light">
                In collaboration with Budget Driving School, ANHF has funded
                driving courses for young people, enabling them to acquire
                practical skills that lead to employment opportunities,
                particularly in the boda boda (motorcycle taxi) sector.
              </p>
            </div>
          </div>
        </div>
        <div class="md:grid grid-cols-3 gap-5 py-20">
          <div class="col-span-1">
            <div
              class="col-span-4 w-full bg-cover bg-center rounded-xl hover:bg-cyan-600"
              style="background-image: url('../../assets/health.jpg')"
            >
              <div
                class="bg-cyan-950 hover:bg-cyan-500 px-4 bg-opacity-70 w-full h-full flex flex-col justify-center md:rounded-xl"
              >
                <div class="max-w-5xl md:px-10 px-1 py-10">
                  <p class="text-white text-4xl lg:text-xl max-w-4xl uppercase">
                    HEALTH
                  </p>
                  <p class="text-white text-lg max-w-4xl font-light">
                    Governments and international organizations understand that
                    universal coverage and the performance of any health system
                    depend on service delivery metrics, and that equitable
                    health systems are necessary to meet health-related
                    Millennium Development Goals (MDGs).
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="border-b p-5">
                <p class="text-lg">Blood Donation Drives</p>
                <p class="text-md font-light">
                  ANHF has also been at the forefront of organizing blood
                  donation drives within the community.
                </p>
              </div>
              <div class="border-b p-5">
                <p class="text-lg">Sanitary Towels Drive</p>
                <p class="text-md font-light">
                  This initiative ensures that girls do not miss school due to a
                  lack of access to menstrual hygiene products, thereby
                  promoting their education and well-being.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div
              class="col-span-4 w-full bg-cover bg-center rounded-xl"
              style="background-image: url('../../assets/community.jpg')"
            >
              <div
                class="bg-red-950 hover:bg-red-600 px-4 bg-opacity-70 w-full h-full flex flex-col justify-center md:rounded-xl"
              >
                <div class="max-w-5xl md:px-10 px-1 py-10">
                  <p class="text-white text-4xl lg:text-xl max-w-4xl uppercase">
                    COMMUNITY / ECONOMIC DEVELOPMENT
                  </p>
                  <p class="text-white text-lg max-w-4xl font-light">
                    Community economic development (CED) is a holistic strategy
                    that seeks to enhance local economies and enhance the
                    welfare of communities.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="border-b p-5">
                <p class="text-lg">Environmental Stewardship</p>
                <p class="text-md font-light">
                  ANHF has been at the forefront of environmental activities,
                  leading initiatives such as beach clean-ups and tree planting
                  drives.
                </p>
              </div>
              <div class="border-b p-5">
                <p class="text-lg">Social Support and Inclusion</p>
                <p class="text-md font-light">
                  Understanding the needs of the most vulnerable, ANHF has been
                  actively involved in social support initiatives.
                </p>
              </div>
              <div class="border-b p-5">
                <p class="text-lg">Youth and Women Empowerment</p>
                <p class="text-md font-light">
                  ANHF is dedicated to empowering youth, women, the elderly, and
                  persons with disabilities (PWDs) through various programs.
                </p>
              </div>
            </div>
          </div>

          <div class="col-span-1">
            <div
              class="col-span-4 w-full bg-cover bg-center rounded-xl"
              style="background-image: url('../../assets/security2.jpg')"
            >
              <div
                class="bg-orange-900 hover:bg-orange-500 px-4 bg-opacity-70 w-full h-full flex flex-col justify-center md:rounded-xl"
              >
                <div class="max-w-5xl md:px-10 px-1 py-10">
                  <p class="text-white text-4xl lg:text-xl max-w-4xl uppercase">
                    SECURITY
                  </p>
                  <p class="text-white text-lg max-w-4xl font-light">
                    Community economic development (CED) is a holistic strategy
                    that seeks to enhance local economies and enhance the
                    welfare of communities. Initiatives and plans are guided by
                    a community's social, environmental, and economic concerns.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="border-b p-5">
                <p class="text-lg">Community Policing and Collaboration</p>
                <p class="text-md font-light">
                  ANHF has established strong partnerships with area chiefs,
                  "mzee wa mtaa" (village elders), and other local leaders to
                  promote community policing efforts.
                </p>
              </div>
              <div class="border-b p-5">
                <p class="text-lg">Youth Engagement in Security Initiatives</p>
                <p class="text-md font-light">
                  In addition to working with local authorities, ANHF has
                  focused on involving the youth in our security projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full md:h-[400px] h-48 bg-cover bg-center flex flex-col  justify-center"
        style="background-image: url('../../assets/heron.jpg')"
      >
        <div
          class="bg-black px-4 bg-opacity-70 w-full h-full flex flex-col justify-center "
        >
          <div class="max-w-5xl md:px-48">
            <p class="text-white text-xl lg:text-4xl max-w-4xl font-light">
              Join the alfayo Nelson hope foundation in making a difference
            </p>
            <button
              routerLink="/donate"
              class="bg-white text-black text-sm font-medium px-4 py-2 lg:py-4 lg:px-8 hover:bg-[#00afef;] hover:text-white rounded-3xl shadow-md"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
