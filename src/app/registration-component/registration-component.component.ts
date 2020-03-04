import { UserRegistrationService } from './../user-registration.service';
import { Component, OnInit,Output, ComponentFactoryResolver} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './../user';
@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent{
  constructor(private router:Router,private service:UserRegistrationService) { }
  user:User = new User("","",0,"","");
  message:any;
  onRegister(form)
  {
    if(form.valid == true)
    { 
      this.router.navigateByUrl('/login');
    }
  }
  registerProcess(form)
  { 
    console.log(form.value);
    let response = this.service.doRegistration(form.value);
    response.subscribe((data) => this.message = data)
  }
}
