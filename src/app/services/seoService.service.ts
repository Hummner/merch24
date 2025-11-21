import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
// optional, falls du dein seoDetail später integrieren willst:
// import { seoDetail } from './seo-detail';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  init(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // zum tiefsten aktiven Kind-Route gehen
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }

        const data = route.snapshot.data || {};

        // Standard aus den Route-Daten
        const title = data['title'] as string | undefined;
        const description = data['description'] as string | undefined;

        if (title) {
          this.title.setTitle(title);
        }

        if (description) {
          this.meta.updateTag({
            name: 'description',
            content: description
          });
        }
      });
  }
}