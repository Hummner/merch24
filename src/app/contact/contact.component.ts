import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {

  router = inject(Router)

  isChecked: boolean = false;
  sentEmail: boolean = false;
  trySubmit: boolean = false;
  http = inject(HttpClient);
  mailTest = false;


  constructor() {

  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: "instant" })
    console.log("scroll");

  }

  // scrollDown() {
  //   window.scrollTo({ bottom: 100, behavior: "smooth" })
  // }

  contactData = {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    message: "",
    subject: "",
  };

  post = {
    endPoint: '/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.trySubmit = true;
    if (ngForm.submitted && ngForm.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {


            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.sentEmail = true
          },
        });
      this.trySubmit = false;

    } else if (ngForm.submitted && ngForm.valid &&  this.mailTest) {

      // ngForm.resetForm();
      console.log("Sent mail", this.contactData);
      this.sentEmail = true;
      this.trySubmit = false;
    }
  };

  

}
