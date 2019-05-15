import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  posts=[];

  constructor(private postsService: PostServiceService) {
   }

  ngOnInit() {
    
    this.postsService.viewActiveUserPost().subscribe(data =>{
      console.log(data);
      this.posts=data.data;
    })
  }

}
