import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  con_phone = "";
  con_pass = "";
  error = {
    'status': false,
    'message': "Vos identifiants sont incorrectent"
  }
  constructor() { }

  ngOnInit() {
  }

  onSend(){
    alert(this.con_pass)
  }

  onNavigate(value: string){

  }
}
