import { SearchBarComponent } from './search-bar/search-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';

import { RouterModule,Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatExpansionModule, MatIconModule } from '@angular/material';
//import {ShowHidePasswordModule} from 'ngx-show-hide-password';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    RegisterPageComponent,
    LoginPageComponent,
    SearchBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot([
      {path:'',redirectTo: '/register',pathMatch:'full'},
      {path:'register',component:RegistrationComponentComponent},
      {path:'login',component:LoginComponentComponent},
      {path:'registerPage',component:RegisterPageComponent},
      {path:'LoginPage',component:LoginPageComponent},
    ]),
    FormsModule,ReactiveFormsModule,
    MatExpansionModule,
    NgxAudioPlayerModule,
    //ShowHidePasswordModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
