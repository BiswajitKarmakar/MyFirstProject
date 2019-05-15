import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,NgForm,Validators,FormArray} from '@angular/forms';
import { last } from '@angular/router/src/utils/collection';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  ApplicationForm:FormGroup;
  ttl:string="";
  description:string="";

  constructor(private frmBilder:FormBuilder,
    private api:PostServiceService
    ){ 
  this.ApplicationForm=frmBilder.group({
    title:['',Validators.required],
    description:['',Validators.required],
  });
}

  ngOnInit() {
    this.restForm();
    
  }

  addPost(){
   console.log(this.ApplicationForm.value);
  this.api.AddPost(this.ApplicationForm.value).subscribe((data)=>{
      console.log("successFull",data);
  })
  }

  restForm(){
    this.ApplicationForm.reset();
  }
  


}
