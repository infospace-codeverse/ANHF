import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  template: `
    <div
      class="max-w-7xl mt-20 md:m-4 md:rounded-xl md:mx-auto h-[450px] bg-cover flex flex-col items-center justify-center text-center"
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
    <div class="max-w-7xl mx-auto md:grid grid-cols-5 flex flex-col py-20">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          A Message From Our Founder
        </p>
        <div
          class="max-w-7xl md:rounded-xl md:mx-auto h-40 md:h-[200px] bg-cover flex flex-col items-center justify-center text-center"
          style="background-image: url('../../assets/video.png')"
        >
          <button
            (click)="openVideo()"
            class="bg-orange-500 h-20 text-3xl rounded-full w-20"
          >
            &#9658;
          </button>
        </div>
      </div>
      <p
        class="col-span-3 md:text-2xl font-light max-md:text-center md:pl-10 pt-14"
      >
        As the Chairperson of Alfayo Nelson Hope Foundation, it is both an honor
        and a privilege to share with you the vision and mission that drive our
        work in Nyali Constituency. Our organization was founded with a singular
        goal: to create lasting, positive change in the lives of the most
        vulnerable members of our community—our youth, children, women, widows,
        and persons with disabilities.
      </p>
    </div>

    <div class="bg-blue-100 md:p-20 p-4 max-md:text-center">
      <div class="md:grid grid-cols-2 flex flex-col py-10 max-w-7xl mx-auto">
        <div>
          <p
            class="col-span-1 text-xl md:text-4xl font-light max-md:text-center"
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
          <img src="../../assets/nelsonkids.png" class="lg:h-[350px] " />
        </div>
      </div>
    </div>
    <div
      class="md:grid grid-cols-3 max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 p-5 lg:py-20"
    >
      <p class="text-center text-5xl text-[#00afef] font-light">
        Our core values
      </p>
      <div class="grid grid-cols-4">
        <div class="col-span-1 flex justify-center">
          <img src="../../assets/empower.png" class="h-14" />
        </div>
        <div class="col-span-3">
          <p class="text-2xl">Community Empowerment</p>
          <p class=" font-light text-xl">
            We empower individuals and families to build selfreliance and
            achieve a better quality of life through supportive and inclusive
            programs.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-4">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/sustainability.png" class="h-14" />
        </div>
        <div class="col-span-3">
          <p class="text-2xl">Sustainability</p>
          <p class=" font-light text-xl">
            We prioritize sustainable practices in all our initiatives, ensuring
            long-term positive impact on the environment and community
            wellbeing.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-4">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/inclusive.png" class="h-14" />
        </div>
        <div class="col-span-3">
          <p class="text-2xl">Inclusivity</p>
          <p class=" font-light text-xl">
            We are dedicated to fostering an environment where all community
            members, regardless of their background or abilities, are valued and
            have equal opportunities.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-4">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/transparency.png" class="h-14" />
        </div>
        <div class="col-span-3">
          <p class="text-2xl">Transparency and Accountability</p>
          <p class=" font-light text-xl">
            We maintain transparency and accountability in all our operations,
            building trust with the community, partners, and supporters.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-4">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/collaboration.png" class="h-14" />
        </div>
        <div class="col-span-3">
          <p class="text-2xl">Collaboration and Partnership</p>
          <p class=" font-light text-xl">
            We believe in the power of collaboration and actively seek
            partnerships to enhance our effectiveness and extend our reach.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-4">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/community-work.png" class="h-14" />
        </div>
        <div class="col-span-3">
          <p class="text-2xl">Volunteerism and Service</p>
          <p class=" font-light text-xl">
            We value the spirit of volunteerism and service, believing that
            positive change is driven by collective efforts and a shared
            commitment to the greater good.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-4">
        <div class="col-span-1 flex justify-center ">
          <img src="../../assets/innovation.png" class="h-14" />
        </div>
        <div class="col-span-3">
          <p class="text-2xl">Innovation and Adaptability</p>
          <p class=" font-light text-xl">
            We embrace innovation and remain adaptable in our approaches,
            continuously seeking new ways to address the evolving needs of our
            community.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-orange-100 py-20">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-4xl">Our Leadership</p>
        <p class="font-light text-xl">
          At the core of the Alfayo Nelson Hope Foundation is a committed
          leadership team, driven by a shared vision of empowering communities
          and uplifting the vulnerable. With diverse expertise and a passion for
          making a real difference, each member plays a vital role in advancing
          our mission. Together, they steer the foundation toward impactful,
          sustainable change for a brighter future.<br />
        </p>
      </div>
      <div
        class="md:grid grid-cols-3 max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 p-5 lg:py-20"
      >
        <div class="">
          <div class="col-span-1 flex justify-center ">
            <img
              src="../../assets/Alfayo-nelson.jpg"
              class="h-56 rounded-full"
            />
          </div>
          <div class="text-center">
            <p class="text-2xl">Alfayo Nelson</p>
            <p class=" font-light text-xl">Founder and Patron</p>
          </div>
        </div>
        <div class="">
          <div class="col-span-1 flex justify-center ">
            <img
              src="../../assets/benson-imoli.jpg"
              class="h-56 rounded-full"
            />
          </div>
          <div class="text-center">
            <p class="text-2xl">Benson Imoli</p>
            <p class=" font-light text-xl">Team Leader / CEO</p>
          </div>
        </div>
        <div class="">
          <div class="col-span-1 flex justify-center ">
            <img src="../../assets/arnold-baya.jpg" class="h-56 rounded-full" />
          </div>
          <div class="text-center">
            <p class="text-2xl">Anorld Baya</p>
            <p class=" font-light text-xl">Programs Director</p>
          </div>
        </div>
        <div class="">
          <div class="col-span-1 flex justify-center ">
            <img src="../../assets/Otanta.jpg" class="h-56 rounded-full" />
          </div>
          <div class="text-center">
            <p class="text-2xl">Alfani Otanta</p>
            <p class=" font-light text-xl">Head of Protocol</p>
          </div>
        </div>
        <div class="">
          <div class="col-span-1 flex justify-center ">
            <img
              src="../../assets/justin-katana.jpg"
              class="h-56 rounded-full"
            />
          </div>
          <div class="text-center">
            <p class="text-2xl">Justine Katana</p>
            <p class=" font-light text-xl">Oversight Management and Control</p>
          </div>
        </div>
        <div class="">
          <div class="col-span-1 flex justify-center ">
            <img src="../../assets/Dan.jpg" class="h-56 rounded-full" />
          </div>
          <div class="text-center">
            <p class="text-2xl">Dan Ngure</p>
            <p class=" font-light text-xl">Executive Assistant</p>
          </div>
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
