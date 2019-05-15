import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.css']
})
export class ManagePostComponent implements OnInit {
  status=true;

  constructor( private ps:PostServiceService) { }
  posts=[];

  ngOnInit() {
   
    this.ps.viewActiveUserPost().subscribe(data=>{
      this.posts = data.data;
      console.table(data);

    })

  };
 
  hideEditPost(){
    this.status=false;
    
  }

}
