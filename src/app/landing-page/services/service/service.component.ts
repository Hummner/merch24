import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  
  @Input()service: any;

  constructor() {
    console.log(this.service);
    
  }
  
}
