import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  posts=[];
  constructor( private ps:PostServiceService) { }

  ngOnInit() {
    this.ps.removePost().subscribe(data=>{
      this.posts = data.data;
      console.table(data);
      })
  }

}
