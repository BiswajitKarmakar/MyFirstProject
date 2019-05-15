import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,NgForm,Validators} from '@angular/forms';
import { PostServiceService } from '../post-service.service';
import { apiModel } from 'src/app/apiModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  signUpForm:FormGroup;
  Email:string="";
  Password:string="";

  constructor(private router:Router ,
        private frmBilder:FormBuilder,
        private PostsService:PostServiceService 
    ){ 
      this.signUpForm=frmBilder.group({
        Email:['',[Validators.required,Validators.email]],
        userPassword:['',Validators.required,],
      });
    }

  application(){
    let tmp = {
      email:this.signUpForm.value.Email,
      password:this.signUpForm.value.userPassword,
    }
   // console.log(tmp);
    this.PostsService.login(tmp).subscribe((data)=>{  
      console.log(data)
      if(data.success==1){
        localStorage.setItem('token',data.data);
        this.router.navigate(['ApplyForm']);
      }
    })

   // this.router.navigate(['ApplyForm']);
  }



  Registation(){
    this.router.navigate(['RegForm']);
  }

  ngOnInit() {
  }
  PostData(signUpForm:NgForm){
    this.Email=this.signUpForm.get('Email').value;
    console.log(this.Email);
  }

  restForm(){
    this.signUpForm.reset();
  }

}
