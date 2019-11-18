import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss']
})
export class CreateShopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSend(){

  }

  onSendOwner(){

  }

  onNavigate(value: string){
    if( value === "NEW_COMPTE"){
      this.router.navigateByUrl("new-account");
    }else if( value === "LOGIN"){
      this.router.navigateByUrl("login");
    }
  }

}
