import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewAccountComponent } from './auth/new-account/new-account.component';
import { PhoneVerificationComponent } from './auth/phone-verification/phone-verification.component';
import { CreateShopComponent } from './auth/create-shop/create-shop.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "new-account", component: NewAccountComponent},
  {path: "phone-verification", component: PhoneVerificationComponent},
  {path: "create-shop",component: CreateShopComponent},
  {path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
