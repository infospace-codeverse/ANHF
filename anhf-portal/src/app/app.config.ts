import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'anhf-portal',
        appId: '1:810707143081:web:4228919a9e57cd0a875cb8',
        storageBucket: 'anhf-portal.appspot.com',
        apiKey: 'AIzaSyCxh8zu9TGVmuaeDNR6hlR6F76ra-uGja8',
        authDomain: 'anhf-portal.firebaseapp.com',
        messagingSenderId: '810707143081',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
  ],
};
