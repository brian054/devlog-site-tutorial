import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser'; // needed or?

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // needed???
    provideRouter(routes, withComponentInputBinding()), 
    provideClientHydration()] //
};
