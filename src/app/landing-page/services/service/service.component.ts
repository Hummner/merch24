import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {


  @Input()service: any;
  product!: string

  constructor(private route: ActivatedRoute) {
    console.log(this.service);

    this.route.params.subscribe((params => this.product = params['id']))
    console.log(this.product);
    
    
  }
  
}
