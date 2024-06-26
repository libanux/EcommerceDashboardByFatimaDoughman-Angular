import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { CoreModule } from './core.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideAnimationsAsync(),
  importProvidersFrom(
    BrowserAnimationsModule,
    CoreModule
  )
]
};
