import { Component, inject } from '@angular/core';
import { ServiceComponent } from "./service/service.component";
import { CategoryServiceService } from '../../services/category-service.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent{


  db = inject(CategoryServiceService);
  categories = this.db.categories
}
