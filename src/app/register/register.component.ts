import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private service:UserRegistrationService) { }

  ngOnInit() {
  }

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
