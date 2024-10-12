import { Component } from '@angular/core';

@Component({
  selector: 'app-health-initiative',
  standalone: true,
  imports: [],
  template: `
    <div class="mt-32"></div>
    <div
      class="max-w-7xl mt-20 md:m-4 md:rounded-xl md:mx-auto h-[600px] bg-cover flex flex-col items-center justify-center text-center"
      style="background-image: url('../../assets/health.jpg')"
    >
      <div
        class="bg-blue-950 p-2 md:rounded-xl bg-opacity-80 w-full h-full flex flex-col items-center justify-center"
      >
        <div class="max-w-3xl">
          <p class="text-white text-3xl lg:text-5xl mb-4">Health Care</p>
          <p class="text-white text-xl lg:text-xl mb-4">
            At the Alfayo Nelson Hope Foundation (ANHF), we are dedicated to
            enhancing the health and well-being of the communities we serve. Our
            health projects focus on both preventive and supportive care,
            addressing critical health challenges in Nyali Constituency and
            surrounding areas. Through our efforts, we aim to create a
            healthier, more resilient community capable of sustaining its
            wellbeing.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-blue-100 md:p-20 p-4 max-md:text-center">
      <div class="md:grid grid-cols-4 flex flex-col py-10 max-w-7xl mx-auto">
        <div class="col-span-3">
          <p>
            <span class="font-normal text-2xl"> About Health initiative </span>
          </p>
          <p
            class="col-span-1 text-lg md:text-2xl font-light max-md:text-center"
          >
            The provision of health care services and equality are currently at
            the top of global policy agendas. Governments and international
            organizations understand that universal coverage and the performance
            of any health system depend on service delivery metrics, and that
            equitable health systems are necessary to meet health-related
            Millennium Development Goals (MDGs). As a result, a lot of
            developing nations—Kenya included—are gradually changing their
            healthcare systems to encourage efficiency and equity.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Blood Donation Drives
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/health001.jpg" class="h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          ANHF has also been at the forefront of organizing blood donation
          drives within the community. These drives are crucial in ensuring that
          local health facilities have a steady supply of blood for emergencies
          and medical procedures. Our blood donation campaigns are not only
          about saving lives but also about fostering a sense of community and
          solidarity. Through these efforts, we have built a network of regular
          donors and have significantly contributed to the region's healthcare
          needs.
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Sanitary Towels Drive
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/pads.jpg" class="h-64 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          This initiative ensures that girls do not miss school due to a lack of
          access to menstrual hygiene products, thereby promoting their
          education and well-being. By addressing this often-overlooked issue,
          we are helping to create an environment where girls can thrive
          academically and personally.
        </p>
      </div>
    </div>
  `,
})
export class HealthInitiativeComponent {}
