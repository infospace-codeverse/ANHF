import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-[#00afef;] p-4 sm:p-6">
      <div class="md:flex md:justify-evenly">
        <div class="mb-6 md:mb-0 flex flex-start">
          <a href="/" class="flex items-center">
            <img
              src="../../assets/logo.png"
              class="h-16 mr-4 sm:h-36 rounded-sm"
              alt="Lish Labs Ai"
            />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-sky-200 "
              >Alfayo Nelson <br />
              Hope Foundation</span
            >
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <!-- <div>
            <ul class="text-gray-100">
              <li class="mb-4">
                <a
                  href="http://localhost:4200/training/"
                  class="hover:underline hover:text-blue-400"
                  >Training</a
                >
              </li>
              <li>
                <a
                  href="http://localhost:4200/blogs/"
                  class="hover:underline hover:text-blue-400"
                  >Blogs</a
                >
              </li>
            </ul>
          </div> -->
          <div>
            <ul class="text-gray-100">
              <li class="mb-4">
                <a
                  href="https://www.facebook.com/EAGLESTIM.VENTURES "
                  class="hover:underline hover:text-blue-400"
                  >Facebook</a
                >
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@nelsonalfayo2221"
                  class="hover:underline hover:text-blue-400"
                  >YouTube</a
                >
              </li>
            </ul>
          </div>
          <div>
            <ul class="text-gray-100">
              <li class="mb-4 list-none">
                <a class="">
                  +254-743327286<br />
                  +254-740040248
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-300 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-evenly">
        <span class="text-sm text-gray-100 sm:text-center"
          >© 2024
          <a routerLink="/" class="hover:underline hover:text-blue-400"
            >Alfayo Nelson Hope Foundation™</a
          >All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.facebook.com/EAGLESTIM.VENTURES "
            class="text-gray-100 hover:text-white"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a (click)="openLink()" class="text-gray-100 hover:text-white">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 6.7011719 7 L 10.642578 12.632812 L 6.90625 17 L 8.2382812 17 L 11.240234 13.484375 L 13.697266 17 L 17.537109 17 L 13.351562 11.009766 L 16.773438 7 L 15.462891 7 L 12.759766 10.160156 L 10.552734 7 L 6.7011719 7 z M 8.5664062 7.9882812 L 10.052734 7.9882812 L 15.683594 16.011719 L 14.1875 16.011719 L 8.5664062 7.9882812 z"
              />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <!-- <a (click)="openInst()" class="text-gray-100 hover:text-white">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Facebook</span>
          </a> -->
          <a (click)="openYtb()" class="text-gray-100 hover:text-white">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">YouTube</span>
          </a>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './the-footer.component.css',
})
export class TheFooterComponent implements OnInit {
  ngOnInit(): void {}

  openLink() {
    window.open('https://x.com/anhfoundation');
  }
  openInst() {
    window.open('https://www.facebook.com/EAGLESTIM.VENTURES ');
  }
  openYtb() {
    window.open('https://www.youtube.com/@nelsonalfayo2221');
  }
}
