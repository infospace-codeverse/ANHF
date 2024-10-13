import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  template: `
    <div class=" mt-20">
      <div class="max-w-6xl mx-auto py-10">
        <div
          class="border py-10 rounded-xl bg-white text-black font-medium px-10 "
        >
          <p class="md:text-5xl text-2xl font-light">Contact Us</p>
          <p class="md:text-4xl text-2xl font-light">
            We'd Love to Hear from You!
          </p>
          <p class="md:text-2xl text-xl font-light">
            If you have any questions, suggestions, or feedback, feel free to
            reach out to us. Our team is here to help and support you.
          </p>
          <div class="flex flex-col pt-3 gap-10 ">
            <div class="col-span-1 md:grid grid-cols-2 gap-10">
              <div
                class="col-span-1 rounded-xl border flex flex-col justify-center md:px-10 p-4"
              >
                <p class="text-5xl text-green-500 font-light">Mobile</p>
                <p class="text-2xl font-light">+254-743327286</p>
                <p class="text-2xl font-light">+254-740040248</p>
              </div>
              <div
                class="col-span-1 rounded-xl border flex flex-col justify-center md:px-10 p-4"
              >
                <p class="text-5xl text-orange-600 font-light">E-mail Us</p>
                <p class="text-2xl font-light break-words">
                  alfayonelsonhopefoundation01&#64;gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {}
