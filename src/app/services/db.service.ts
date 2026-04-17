import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../interfaces/category';
import { Article } from '../interfaces/article';
import { Router } from '@angular/router';
import { ArticleColors } from '../interfaces/article-colors';

const BASE_URL = "http://127.0.0.1:8000/api/"

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private categoriesSubject = new BehaviorSubject(<Category[]>([]))
  categories$ = this.categoriesSubject.asObservable()

  private filterdProductsSubject = new BehaviorSubject(<Article[]>([]))
  filterdProducts$ = this.filterdProductsSubject.asObservable()

  private singleProductSubject = new BehaviorSubject(<Article | undefined>(undefined))
  singleProduct$ = this.singleProductSubject.asObservable()

  private recentlyArraySubject = new BehaviorSubject(<Article[]>([]))
  recentlyArray$ = this.recentlyArraySubject.asObservable()

  constructor(private http: HttpClient, private router: Router) { }

  getCategoriesFromDb() {
    const respond = this.http.get<Category[]>(BASE_URL + 'category/').subscribe(data => {
      console.log(data);
      this.categoriesSubject.next(data)
      // das in die service



    })
  }

  getProductsFromCategory(path: string) {
    this.http.get<Article[]>(BASE_URL + 'shop/category/' + path).pipe(
      catchError((e) => {
        this.router.navigate(['/shop/error/404-not-found'])
        return throwError(() => new Error('Something bad happened; please try again later.'));

      })
    ).subscribe(data => {
      console.log(data);
      this.filterdProductsSubject.next(data)

    })
  }

  getProductFromDB(slug: string) {
    this.http.get<Article>(BASE_URL + 'shop/details/' + slug).pipe(
      catchError((e) => {
        this.router.navigate(['/shop/error/404-not-found'])
        return throwError(() => new Error('Something bad happened; please try again later.'));

      })
    ).subscribe(data => {
      console.log(data);
      this.singleProductSubject.next(data)

    })
  }


  destroySubProduct() {
    this.singleProductSubject.next(undefined)
  }

  getFirstPageProducts() {
    this.http.get<Article[]>(BASE_URL + 'shop/').pipe(
      catchError((e) => {
        this.router.navigate(['/shop/error/404-not-found'])
        return throwError(() => new Error('Something bad happened; please try again later.'));

      })
    ).subscribe(data => {
      console.log(data);
      this.filterdProductsSubject.next(data)

    })
  }

  getRecentlyArticle() {
    const recentlyString = localStorage.getItem("recently")
    let recentlyArray = []

    if (recentlyString) {
      recentlyArray = JSON.parse(recentlyString)
    }
    this.recentlyArraySubject.next(recentlyArray)
  }

  saveRecentlyArticle(article: Article) {
    const recentlyString = localStorage.getItem("recently")
    let recentlyArray = [];
    if (recentlyString) {
      recentlyArray = JSON.parse(recentlyString)
      if (recentlyArray.some((a: Article) => a.id === article.id)) return // maybe with id not with slug
      if (recentlyArray.length > 5) {
        recentlyArray = recentlyArray.slice(0, 4)
      }
    }





    recentlyArray.unshift(article)
    localStorage.setItem("recently", JSON.stringify(recentlyArray))

  }


  async postOrder(order: any) {
    try {
      this.http.post(
        BASE_URL + "shop/order/", order
      ).subscribe((config) => {
        console.log('Updated config:', config);
      });

    } catch (error) {
      console.log(error);
    }

  }
}
