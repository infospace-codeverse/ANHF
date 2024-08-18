import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <div
        class="w-full h-[800px] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style="background-image: url('../../assets/heron.jpg')"
      >
        <div
          class="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-end"
        >
          <div class="max-w-5xl">
            <p class="text-white text-2xl lg:text-4xl mb-4">
              Alfayo Nelson Hope foundation making a change in cosatla
              communities, founded with a vision to nurture and empower
            </p>
            <div
              class="bg-orange-500 text-black  font-medium px-10 py-10 shadow-md"
            >
              <div class="lg:grid grid-cols-3 flex flex-col">
                <div class="col-span-1">
                  <p class="text-3xl">1000 +</p>
                  <p>children benefited from scholarships in school fee</p>
                </div>

                <div class="col-span-1">
                  <p class="text-3xl">2 +</p>
                  <p>Years in operation</p>
                </div>
                <div class="col-span-1">
                  <p class="text-3xl">200 +</p>
                  <p>Groups have benefited in help and savings</p>
                </div>
              </div>
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
            <p class="text-black text-xl lg:text-3xl mb-4">
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
