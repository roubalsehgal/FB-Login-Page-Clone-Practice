import { UserRegistrationService } from './../user-registration.service';
import { MyMaterialModule } from './../material.module';
import { DataSearchService } from './../data-search.service';
import { Post } from './../post';
import { Component, OnInit } from '@angular/core'; 
import { MatOptionSelectionChange } from '@angular/material';
import { Track } from 'ngx-audio-player';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  post:Post[]
  post1:Post[]
  flag:boolean = false;
  profileName:any;
  url = "https://cdn.arstechnica.net/wp-content/uploads/2019/05/GettyImages-843466180.png";
  constructor(private dataService:DataSearchService,private service:UserRegistrationService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.post = posts
      this.dataService.postsData = posts
    })
    let response = this.service.gettingCredentials()
    response.subscribe((data) => this.profileName=data[0].firstName)
    
  }
 onSelectedFilter(event)
 {
   
  if(event.length > 0)
   {
     this.post1 = this.dataService.filteredOptions();
     this.post =[];
     this.flag = false;
   }

   else{
     this.post1 = this.dataService.postsData;
     this.post =[];
   }
 }

 onFlagRemove(event)
 {
  this.flag  = event;
 }

}
