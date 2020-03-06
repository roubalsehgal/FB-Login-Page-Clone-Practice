import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { DataSearchService } from '../data-search.service';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

