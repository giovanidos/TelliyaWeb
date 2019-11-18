import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSend(){
    
  }

  onNavigate(value: string){
    if( value === "LOGIN"){
      this.router.navigateByUrl('login');
    }else if( value === "NEW_SHOP"){
      this.router.navigateByUrl('create-shop');
    }
  }
}
