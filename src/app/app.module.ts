import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { AuthHeaderComponent } from './auth/auth-header/auth-header.component';
import { AuthFooterComponent } from './auth/auth-footer/auth-footer.component';
import { NewAccountComponent } from './auth/new-account/new-account.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { PhoneVerificationComponent } from './auth/phone-verification/phone-verification.component';
import { CreateShopComponent } from './auth/create-shop/create-shop.component';
import { FormsModule } from '@angular/forms';
import { SelectDialogComponent } from './dialog/select-dialog/select-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    NewAccountComponent,
    PhoneVerificationComponent,
    CreateShopComponent,
    SelectDialogComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
