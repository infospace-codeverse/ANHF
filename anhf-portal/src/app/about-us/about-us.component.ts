import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  template: `
    <div
      class="max-w-7xl md:m-4 md:rounded-xl md:mx-auto h-[450px] bg-cover flex flex-col items-center justify-center text-center"
      style="background-image: url('../../assets/back.jpg')"
    >
      <div
        class="bg-black p-2 md:rounded-xl bg-opacity-50 w-full h-full flex flex-col items-center justify-center"
      >
        <div class="max-w-xl">
          <p class="text-white text-3xl lg:text-5xl mb-4">About Us.</p>
          <p class="text-white text-xl lg:text-xl mb-4">
            Alfayo Nelson Hope Foundation making a change in coastal
            communities, founded with a vision to nurture and empower.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto md:grid grid-cols-3 flex flex-col py-20">
      <p class="col-span-1 text-2xl md:text-5xl max-md:text-center">
        A Message From Our Founder
      </p>
      <p class="col-span-2 md:text-lg max-md:text-center">
        As the Chairperson of Alfayo Nelson Hope Foundation, it is both an honor
        and a privilege to share with you the vision and mission that drive our
        work in Nyali Constituency. Our organization was founded with a singular
        goal: to create lasting, positive change in the lives of the most
        vulnerable members of our community—our youth, children, women, widows,
        and persons with disabilities.
      </p>
    </div>
    <div
      class="max-w-7xl md:m-4 md:rounded-xl md:mx-auto h-40 md:h-[300px] bg-cover flex flex-col items-center justify-center text-center"
      style="background-image: url('../../assets/video.png')"
    >
      <button
        (click)="openVideo()"
        class="bg-orange-500 h-20 text-3xl rounded-full w-20"
      >
        &#9658;
      </button>
    </div>
    <div class="bg-blue-100 p-20 mt-20">
      <div class="md:grid grid-cols-2 flex flex-col py-10 max-w-7xl mx-auto">
        <div>
          <p
            class="col-span-1 text-2xl md:text-4xl font-light max-md:text-center"
          >
            <span class="text-7xl text-blue-300">❝<br /></span> We believe that
            sustainable development is not just a concept but a commitment. A
            commitment to ensure that every initiative we undertake brings about
            meaningful, long-term benefits. Our focus is on
            empoweringindividuals and communities by providing them with the
            tools, resources, and opportunities they need to thrive. Through
            education, skills development, and economic empowerment programs, we
            aim to build a brighter future for all.
          </p>
          ──────────────
          <p>
            <span class="font-normal text-2xl"> Alfayo Nelson </span>
            <span
              class="col-span-1 text-2xl md:text-xl font-light max-md:text-center"
            >
              <br />Founder/Chairperson
            </span>
          </p>
        </div>
        <div class="flex justify-center items-center">
          <img src="../../assets/founder.png" />
        </div>
      </div>
    </div>
    <div class="bg-black p-5">
      <div class="md:grid grid-cols-2 flex flex-col py-10 max-w-7xl mx-auto">
        <div class="flex flex-col justify-center">
          <p class="md:text-5xl text-3xl text-center text-blue-300 capitalize">
            who we are<br />
          </p>
          <p
            class="col-span-1 text-blue-300 text-xl md:text-xl font-light max-md:text-center"
          >
            We are determined to make a real difference. We are dedicated to
            fostering sustainable development through the power of volunteerism,
            intercultural exchange, and community engagement.
          </p>
        </div>
        <div class="flex justify-center items-center">
          <img src="../../assets/nelsonkids.png" class="h-[350px]" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 max-w-7xl mx-auto">
      <div class="grid grid-cols-2">
        <div class="col-span-1 flex justify-center">
          <img src="../../assets/empower.png" class="h-16" />
        </div>
        <div class="col-span-1">
          <p>Community Empowerment</p>
          <p>
            We empower individuals and families to build selfreliance and
            achieve a better quality of life through supportive and inclusive
            programs.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/sustainability.png" class="h-16" />
        </div>
        <div class="col-span-1">
          <p>Sustainability</p>
          <p>
            We prioritize sustainable practices in all our initiatives, ensuring
            long-term positive impact on the environment and community
            wellbeing.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/inclusive.png" class="h-16" />
        </div>
        <div class="col-span-1">
          <p>Inclusivity</p>
          <p>
            We are dedicated to fostering an environment where all community
            members, regardless of their background or abilities, are valued and
            have equal opportunities.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/transparency.png" class="h-16" />
        </div>
        <div class="col-span-1">
          <p>Transparency and Accountability</p>
          <p>
            We maintain transparency and accountability in all our operations,
            building trust with the community, partners, and supporters.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/collaboration.png" class="h-16" />
        </div>
        <div class="col-span-1">
          <p>Collaboration and Partnership</p>
          <p>
            We believe in the power of collaboration and actively seek
            partnerships to enhance our effectiveness and extend our reach.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/community-work.png" class="h-16" />
        </div>
        <div class="col-span-1">
          <p>Volunteerism and Service</p>
          <p>
            We value the spirit of volunteerism and service, believing that
            positive change is driven by collective efforts and a shared
            commitment to the greater good.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/innovation.png" class="h-16" />
        </div>
        <div class="col-span-1">
          <p>Innovation and Adaptability</p>
          <p>
            We embrace innovation and remain adaptable in our approaches,
            continuously seeking new ways to address the evolving needs of our
            community.
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  openVideo() {
    window.open('https://www.youtube.com/watch?v=wa2vzFn-Vzg', '_blank');
  }
}
