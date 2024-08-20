import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [],
  template: `
    <div class=" mt-20">
      <div class="max-w-6xl mx-auto py-10">
        <div
          class="border py-10 rounded-xl bg-white text-black font-medium px-10 "
        >
          <p class="md:text-4xl text-2xl font-light">
            Support the Alfayo Nelson Hope Foundation
          </p>
          <p class="md:text-2xl text-xl font-light">
            Your contribution will be highly appreciated 
          </p>
          <div class="flex flex-col pt-3 gap-10 ">
            <div class="col-span-1 md:grid grid-cols-2 gap-10">
              <div
                class="col-span-1 w-full bg-cover bg-center rounded-xl"
                style="background-image: url('../../assets/heron.jpg')"
              >
                <div
                  class="bg-green-600 px-4 bg-opacity-70 w-full h-full flex flex-col justify-center rounded-xl"
                >
                  <div class="max-w-5xl py-10">
                    <img
                      src="../../assets/SafM-PESA-Logo.jpg"
                      class="md:h-20  h-10"
                    />
                  </div>
                </div>
              </div>
              <div
                class="col-span-1 rounded-xl border flex flex-col justify-center md:px-20 p-4"
              >
                <p class="text-5xl text-green-500 font-light">Mpesa</p>
                <p class="text-xl font-light">Paybill Number : 247247</p>
                <p class="text-xl font-light">Paybill Number : 743327</p>
              </div>
            </div>
            <div class="col-span-1 md:grid grid-cols-2 gap-10">
              <div
                class="col-span-1 w-full bg-cover bg-center rounded-xl"
                style="background-image: url('../../assets/heron.jpg')"
              >
                <div
                  class="bg-orange-700 px-4 bg-opacity-70 w-full h-full flex flex-col justify-center rounded-xl"
                >
                  <div class="max-w-5xl py-4">
                    <img
                      src="../../assets/equity-bank-logo.png"
                      class="h-28 bg-white"
                    />
                  </div>
                </div>
              </div>
              <div
                class="col-span-1 rounded-xl border flex flex-col justify-center md:px-20 p-4"
              >
                <p class="text-5xl text-orange-600 font-light">Equity Bank</p>
                <p class="text-xl font-light">
                  Account Name : Alfayo Nelson Hope Foundation
                </p>
                <p class="text-xl font-light">Account Number : 1200284374821</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DonateComponent {}
