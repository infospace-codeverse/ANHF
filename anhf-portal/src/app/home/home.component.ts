import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="md:px-24">
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
              <p class="text-5xl text-orange-500 font-light">1000 +</p>
              <p class="text-xl font-light">
                Children benefited from scholarships in school fee
              </p>
            </div>
            <div class="col-span-1">
              <p class="text-5xl text-[#00afef;] font-light">2 +</p>
              <p class="text-xl font-light">Years in operation</p>
            </div>
            <div class="col-span-1">
              <p class="text-5xl text-red-500 font-light">200 +</p>
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
    </div>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
