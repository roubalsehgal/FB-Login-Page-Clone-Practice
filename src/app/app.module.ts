import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { RouterModule,Routes } from '@angular/router';
import { MatExpansionModule, MatIconModule } from '@angular/material';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot([
      {path:'',redirectTo: '/register',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent},
    ]),
    FormsModule,ReactiveFormsModule,
    MatExpansionModule,
    NgxAudioPlayerModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
