import { DataSearchService } from './../data-search.service';
import { Post } from './../post';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef,Output,EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  myControl  = new FormControl();
  filteredOptions:Observable<String[]>;
  allPosts:Post[];
  autoCompleteList:any[];
  flag:boolean = false;
  // @ViewChild('autocompleteInput',{static:false}) autocompleteInput:ElementRef;
  @Output() onSelectedOption = new EventEmitter();
  @Output() onFlag = new EventEmitter();
  autocompleteInput: ElementRef;

  constructor(private dataService:DataSearchService) { }

  ngOnInit() {
    // Get All the Post
    this.dataService.getPosts().subscribe(posts => {
     this.allPosts = posts 
     
    });

    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput)
    })
  }
    private autoCompleteExpenseList(input)
    {
      let categoryList = this.filterCategoryList(input)
      this.autoCompleteList = categoryList;
    }
    filterCategoryList(val)
    {
      var categoryList:[];
      if(typeof val!= "string")
      {
        return [];
      }
      if(val === '' || val === null)
      {
        return [];
      }
      return val ? this.allPosts.filter(s=>s.title.toLowerCase().indexOf(val.toLowerCase())!=-1)
      :this.allPosts;
    }
    displayFn(post:Post)
    {
      let k = post ? post.title :post;
      return k;
    }
    filterPostList(event)
    {
      var posts = event.source.value;
      if(!posts)
      {
        this.dataService.searchOption=[]
      }
      else{
        this.dataService.searchOption.push(posts);
        this.onSelectedOption.emit(this.dataService.searchOption);
      }
      
      
    }

    removeOption(option)
    {
      let index = this.dataService.searchOption.indexOf(option)
      if(index >= 0)
      {
        this.dataService.searchOption.splice(index,1);
        this.flag=true; 
       this.onFlag.emit(this.flag);
      }
      
      this.onSelectedOption.emit(this.dataService.searchOption)
      
    }
    focusOnPlaceInput()
    {
      // this.autocompleteInput.nativeElement.focus();
      this.autocompleteInput.nativeElement.value = "";
    }
    
  }









