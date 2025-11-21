import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import AOS from 'aos';
import { seoDetail } from '../../../../seoDetail';

type SeoKey = keyof typeof seoDetail;

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements AfterViewInit, OnInit {


  @Input() service: any;
  router = inject(Router)
  product!: string;
  switchImage = false;



  constructor(private route: ActivatedRoute) {
    console.log(this.service);
    this.route.params.subscribe((params => this.product = params['id']))
    console.log(this.product);




  }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    setTimeout(() => AOS.refreshHard(), 0);
  }

  navigateTo(link: string) {
    if (this.isSeoKey(link)) {
      let slug = seoDetail[link].slug
      this.router.navigateByUrl('/category' + slug);
    }

  }

  isSeoKey(key: string): key is keyof typeof seoDetail {
    return  key in seoDetail
  }

  showPhoto(img: string) {
    // if (this.switchImage) {
    //   return "assets/img/" + img + "_2" + ".jpg"
    // }

    return "assets/img/" + img + ".jpg"
  }

}
