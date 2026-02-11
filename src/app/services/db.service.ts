import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category';
import { Article } from '../interfaces/article';

const BASE_URL = "http://127.0.0.1:8000/api/"

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private categoriesSubject = new BehaviorSubject(<Category[]>([]))
  categories$ = this.categoriesSubject.asObservable()

  private filterdProductsSubject = new BehaviorSubject(<Article[]>([]))
  filterdProducts$ = this.filterdProductsSubject.asObservable()

  constructor(private http: HttpClient) { }

  getCategoriesFromDb() {
    const respond = this.http.get<Category[]>(BASE_URL + 'category/').subscribe(data => {
      console.log(data);
      this.categoriesSubject.next(data)
      // das in die service



    })
  }

  getProductsFromCategory(path: string) {
    this.http.get<Article[]>(BASE_URL + 'shop/category/' + path).subscribe(data => {
      console.log(data);
      this.filterdProductsSubject.next(data)

    })
  }
}
