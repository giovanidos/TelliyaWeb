import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  con_phone = "";
  con_pass = "";
  error = {
    'status': true,
    'message': "Vos identifiants sont incorrectent"
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSend(){
    alert(this.con_pass)
  }

  onNavigate(value: string){
      if(value === "NEW_COMPTE"){
        this.router.navigateByUrl('new-account');
      }else if( value === "NEW_SHOP"){
        this.router.navigateByUrl('create-shop');
      }
  }
}
