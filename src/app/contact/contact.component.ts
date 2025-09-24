import { Component, inject, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { Router, RouterLink } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIcon, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  router = inject(Router)

  constructor() {

  }

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: "instant"})
    console.log("scroll");
    
  }

}
