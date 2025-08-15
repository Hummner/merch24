import { Component, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: "instant"})
    console.log("scroll");
    
  }

}
