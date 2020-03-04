import { UserRegistrationService } from './../user-registration.service';
import { MyMaterialModule } from './../material.module';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  credentials:any;
  flag = 1;
  constructor(private router:Router,private service:UserRegistrationService) { }
onLogin(form)
{

let response = this.service.gettingCredentials();
response.subscribe((data) => this.credentials = data);
let email:String = form.value.email;
let password:String = form.value.password
for(let i=0;i<this.credentials.length;i++){
if( email == this.credentials[i].email && password == this.credentials[i].password && form.valid == true)
{
  this.flag=1;
  this.router.navigateByUrl('/registerPage');
  break;
}
else {
  this.flag = 0;
}
}
if(this.flag == 0)
{
  alert("Invalid Credentials");
}

}

}
