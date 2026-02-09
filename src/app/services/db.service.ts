import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private categorySubject = new BehaviorSubject(<string>(''))
  category$ = this.categorySubject.asObservable()

  constructor() { }


  
}
