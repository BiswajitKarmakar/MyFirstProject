import { Component, OnInit} from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  posts=[];
  postDetails={
    title:'',
    description:'',
    user_id:'',
  }
  constructor(private ps : PostServiceService) { }

  ngOnInit() {
    this.ps.editActivePost().subscribe(data=>{
      this.ps.editActivePost(data.get('user_id')).subscribe(v =>{
        this.postDetails.title = v.data.title;
        this.postDetails.description = v.data.description;
        this.postDetails.user_id = v.data._id;
        console.log(this.postDetails);

      })
     // this.posts = data.data;
     // console.table(data);
      });
}
editPost(){
}

}
