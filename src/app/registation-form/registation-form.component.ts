import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,NgForm,Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registation-form',
  templateUrl: './registation-form.component.html',
  styleUrls: ['./registation-form.component.css']
})
export class RegistationFormComponent implements OnInit {
  regForm:FormGroup;
  fname:string="";
  lname:string="";
  Email:string="";
  Password:string="";
  Address:string="";


  constructor( private frmBilder:FormBuilder ) {
    this.regForm = frmBilder.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]],
      Address:['',[Validators.required]],
      Check:['',[Validators.required]],

    });
   }

  ngOnInit(){  
  }
  regFormDate(regForm:NgForm){
    console.log(regForm.controls);
  }


}
