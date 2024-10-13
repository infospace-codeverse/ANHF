import { Component } from '@angular/core';

@Component({
  selector: 'app-education-initiative',
  standalone: true,
  imports: [],
  template: `
    <div class="mt-32"></div>
    <div
      class="max-w-7xl mt-20 md:m-4 md:rounded-xl md:mx-auto h-[600px] bg-cover flex flex-col items-center justify-center text-center"
      style="background-image: url('../../assets/Edu002.jpg')"
    >
      <div
        class="bg-black p-2 md:rounded-xl bg-opacity-80 w-full h-full flex flex-col items-center justify-center"
      >
        <div class="max-w-3xl">
          <p class="text-white text-3xl lg:text-5xl mb-4">EDUCATION</p>
          <p class="text-white text-xl lg:text-xl mb-4">
            At the Alfayo Nelson Hope Foundation (ANHF), we believe that
            education is a cornerstone of community development and individual
            empowerment. Our commitment to education is reflected in a range of
            impactful projects and initiatives that have touched the lives of
            thousands in Nyali Constituency and beyond.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto text-center">
      <div class=" rounded-xl bg-white text-black font-medium px-10 py-10 ">
        <p class="text-2xl font-light">
          The Alfayo Nelson Hope Foundation is making significant strides in
          transforming lives and building a more educated, skilled, and
          self-reliant community. Our ongoing commitment to education and
          development continues to drive us toward creating lasting positive
          change in Nyali Con-stituency.
        </p>
        <div class="lg:grid grid-cols-3 flex flex-col">
          <div class="col-span-1">
            <p class="text-7xl text-orange-500 font-light">120+</p>
            <p class="text-2xl font-light">in Primary Schools</p>
          </div>
          <div class="col-span-1">
            <p class="text-7xl text-[#00afef;] font-light">500+</p>
            <p class="text-2xl font-light">in secondary institutions</p>
          </div>
          <div class="col-span-1">
            <p class="text-7xl text-red-500 font-light">350+</p>
            <p class="text-2xl font-light">in tertiary institutions</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-200 md:py-20 py-4 max-md:text-center">
      <div class="md:grid grid-cols-4 flex flex-col py-10 max-w-7xl mx-auto">
        <div class="col-span-3">
          <p>
            <span class="font-normal text-2xl">
              ANHF EDUCATIONAL PROJECTS AND ACHIEVEMENTS.
            </span>
          </p>
          <p
            class="col-span-1 text-lg md:text-2xl font-light max-md:text-center"
          >
            Education plays a crucial role in fostering economic development,
            and making investments in education and skills development in Kenya
            would result in a significant boost to the country's overall
            economic growth. Offering young individuals a top-notch education
            sets them up for success in the job market and empowers them to lead
            fulfilling and prosperous lives. The improvement of fertility,
            mortality rates, and overall quality of life is closely tied to
            education. A higher level of education for women and girls leads to
            increased self-determination, a later marriage age, and smaller
            families.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Educational Sponsorships
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/Edu006.jpg" class="h-56 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          ANHF is proud to have sponsored over 1,000 students across various
          levels of education—primary, secondary, and tertiary. Our scholarships
          have enabled students from underserved communities to access quality
          education, unlocking opportunities for a brighter future. We also
          actively support vocational training, providing sponsorships for
          skilled education in fields such as hairdressing, and driving, and
          assisting students in joining Technical and Vocational Education and
          Training (TVET) institutions and universities.
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Sports and Extracurricular Activities
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/Edu010.jpg" class="h-56 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          Recognizing the importance of holistic development, ANHF has also
          sponsored students in sports and extracurricular activities. By
          investing in these areas, we aim to nurture talent, promote physical
          well-being, and foster teamwork and discipline among the youth.
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Technology and Digital Literacy
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/Edu009.jpg" class="h-56 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          In today’s digital age, access to technology is crucial for
          educational success. ANHF has been instrumental in supplying computers
          to schools in the region, ensuring that students have the tools they
          need to succeed in an increasingly digital world. Our efforts in
          promoting digital literacy are helping to bridge the technological
          divide and equip the next generation with essential skills
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto md:grid grid-cols-6 flex flex-col pt-10">
      <div class="col-span-2 px-4">
        <p class="text-2xl md:text-3xl max-md:text-center">
          Partnerships for Vocational Training
        </p>
      </div>
      <div class="col-span-4 px-4">
        <div class="">
          <img src="../../assets/Edu005.jpg" class="h-56 md:h-96" />
        </div>
        <p class="md:text-2xl font-light max-md:text-center">
          In collaboration with Budget Driving School, ANHF has funded driving
          courses for young people, enabling them to acquire practical skills
          that lead to employment opportunities, particularly in the boda boda
          (motorcycle taxi) sector. This initiative not only empowers
          individuals but also contributes to the local economy by fostering
          entrepreneurship and self-sufficiency.
        </p>
      </div>
    </div>
  `,
})
export class EducationInitiativeComponent {}
