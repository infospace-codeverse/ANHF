import { Component } from '@angular/core';

@Component({
  selector: 'app-ced-initiative',
  standalone: true,
  imports: [],
  template: `
    <div class="mt-32"></div>
    <div
      class="max-w-7xl mt-20 md:m-4 md:rounded-xl md:mx-auto h-[600px] bg-cover flex flex-col items-center justify-center text-center"
      style="background-image: url('../../assets/Ced004.jpg')"
    >
      <div
        class="bg-red-950 p-2 md:rounded-xl bg-opacity-80 w-full h-full flex flex-col items-center justify-center"
      >
        <div class="max-w-3xl">
          <p class="text-white text-3xl lg:text-5xl mb-4">
            COMMUNITY / ECONOMIC DEVELOPMENT
          </p>
          <p class="text-white text-xl lg:text-xl mb-4">
            The Alfayo Nelson Hope Foundation (ANHF) is deeply committed to
            community and economic empowerment, playing a pivotal role in a
            variety of initiatives that enhance the quality of life for the
            residents of Nyali Constituency. Our efforts focus on environmental
            sustainability, social support, and inclusive development for all
            community members
          </p>
        </div>
      </div>
    </div>
    <div class="bg-red-100 md:py-20 py-4 max-md:text-center">
      <div class="md:grid grid-cols-4 flex flex-col py-10 max-w-7xl mx-auto">
        <div class="col-span-3">
          <p>
            <span class="font-normal text-2xl">
              ANHF COMMUNITY ECONOMIC DEVELOPMENT PROJECTS
            </span>
          </p>
          <p
            class="col-span-1 text-lg md:text-2xl font-light max-md:text-center"
          >
            Community economic development (CED) is a holistic strategy that
            seeks to enhance local economies and enhance the welfare of
            communities. Initiatives and plans are guided by a community's
            social, environmental, and economic concerns. It highlights the
            active engagement and participation of community members in creating
            the economic development efforts and decisions that impact their
            lives. CED encompasses more than just the attraction of external
            capital. It involves the cultivation of local entrepreneurship, the
            encouragement of innovation, and the advancement of fair economic
            development that benefits all individuals.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Environmental Stewardship
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/Ced006.jpg" class="h-56 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          ANHF has been at the forefront of environmental activities, leading
          initiatives such as beach clean-ups and tree planting drives. These
          efforts not only beautify and preserve our natural surroundings but
          also foster a sense of responsibility and community among local
          residents. Through these activities, we aim to instill the importance
          of environmental conservation and sustainability
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Social Support and Inclusion
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/Ced003.jpg" class="h-56 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          Understanding the needs of the most vulnerable, ANHF has been actively
          involved in social support initiatives. During the holy month of
          Ramadan, we organize Iftar programs to feed needy Muslims, ensuring
          they can break their fasts with dignity. Our foundation also extends
          its support to the less fortunate by regularly visiting and providing
          aid to Mji wa Salama and Mkomani Children’s Home. These efforts are
          part of our broader commitment to uplifting the lives of orphans,
          vulnerable children, and families in need.
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Youth and Women Empowerment
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/Ced007.jpg" class="h-56 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          ANHF is dedicated to empowering youth, women, the elderly, and persons
          with disabilities (PWDs) through various programs. We have worked with
          over 80 community groups, facilitating youth registration programs and
          collaborating with organizations like Coast Action Initiative CBO. By
          engaging with these groups, we help to create opportunities for
          economic empowerment, skill development, and active participation in
          community life.
        </p>
      </div>
    </div>
  `,
})
export class CEDInitiativeComponent {}
