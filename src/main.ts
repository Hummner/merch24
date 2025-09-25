import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',             // Scroll zu #ids aktivieren
        scrollPositionRestoration: 'enabled'   // Scroll-Position wiederherstellen                 // optional: Offset für feste Navbar
      })
    ),
    provideAnimations(), provideHttpClient()
  ]
});
