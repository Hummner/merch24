import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category';

const BASE_URL = "http://127.0.0.1:8000/api/"

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private categoriesSubject = new BehaviorSubject(<Category[]>([]))
  categories$ = this.categoriesSubject.asObservable()

  constructor(private http: HttpClient) { }

  getCategoryFromDb() {
    const respond = this.http.get<Category[]>(BASE_URL + 'category/').subscribe(data => {
      console.log(data);
      this.categoriesSubject.next(data)
      // das in die service


    })
  }
}
