import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  option1 = {
    "link": "login",
    "name": "connexion"
  }

  option2 = {
    "link": "new-shop",
    "name": "nouveau boutique"
  }
  constructor() { }

  ngOnInit() {
  }

}
