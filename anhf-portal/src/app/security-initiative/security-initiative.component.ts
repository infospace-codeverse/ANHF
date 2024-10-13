import { Component } from '@angular/core';

@Component({
  selector: 'app-security-initiative',
  standalone: true,
  imports: [],
  template: `
    <div class="mt-32"></div>
    <div
      class="max-w-7xl mt-20 md:m-4 md:rounded-xl md:mx-auto h-[600px] bg-cover flex flex-col items-center justify-center text-center"
      style="background-image: url('../../assets/Sec002.jpg')"
    >
      <div
        class="bg-orange-950 p-2 md:rounded-xl bg-opacity-80 w-full h-full flex flex-col items-center justify-center"
      >
        <div class="max-w-3xl">
          <p class="text-white text-3xl lg:text-5xl mb-4">SECURITY</p>
          <p class="text-white text-xl lg:text-xl mb-4">
            The Alfayo Nelson Hope Foundation (ANHF) recognizes that community
            safety is a vital component of overall well-being and development.
            To this end, we have implemented a series of security initiatives
            aimed at fostering a safe and secure environment for the residents
            of Nyali Constituency. Our approach is collaborative, working
            closely with local leaders and community members to address security
            challenges and enhance public safety.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-orange-100 md:py-20 py-4 max-md:text-center">
      <div class="md:grid grid-cols-4 flex flex-col py-10 max-w-7xl mx-auto">
        <div class="col-span-3">
          <p>
            <span class="font-normal text-2xl"> ANHF SECURITY PROJECTS </span>
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
          Community Policing and Collaboration
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/Sec001.jpg" class=" h-64 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          ANHF has established strong partnerships with area chiefs, "mzee wa
          mtaa" (village elders), and other local leaders to promote community
          policing efforts. By working together with these key stakeholders, we
          have been able to identify security concerns, share vital information,
          and implement proactive measures to prevent crime. These
          collaborations have strengthened the trust between community members
          and law enforcement, leading to more effective and responsive security
          interventions
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Youth Engagement in Security Initiatives
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/Ced001.jpg" class="h-56 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          In addition to working with local authorities, ANHF has focused on
          involving the youth in our security projects. By engaging young people
          in security awareness programs and providing them with leadership
          roles within the community, we aim to deter criminal behavior and
          promote a culture of responsibility and civic duty. This not only
          enhances security but also empowers the youth to take pride in
          safeguarding their neighborhoods.
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Talent acquisition and Development
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/Ced002.jpg" class="h-56 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          To distract youth from engaging in criminal activities, ANHF has
          initiated a series of talent acquisition and development activities.
          These programs offer young people the opportunity to showcase and
          nurture their talents in areas such as sports, music, art, and other
          creative fields. By providing platforms for expression and growth, we
          not only help to reduce crime rates but also empower the youth to
          pursue their passions and build meaningful careers.
        </p>
      </div>
    </div>
  `,
})
export class SecurityInitiativeComponent {}
