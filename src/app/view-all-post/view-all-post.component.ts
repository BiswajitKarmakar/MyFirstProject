import { Component, OnInit } from '@angular/core';
import { PostServiceService} from '../post-service.service';
import { apiModel } from 'src/app/apiModel';
import { from } from 'rxjs';

@Component({
  selector: 'app-view-all-post',
  templateUrl: './view-all-post.component.html',
  styleUrls: ['./view-all-post.component.css']
})
export class ViewAllPostComponent implements OnInit {
  posts=[];
  constructor( private postsService: PostServiceService) { }
  msg = '';
  color='';

  ngOnInit() {
    this.postsService.viewAllPost().subscribe(data =>{
      console.table(data);
      this.posts = data.data,
      this.msg = data.msg;
      
    })
    this.postsService.getItems().subscribe(data=>{
      
    })
  }

}
