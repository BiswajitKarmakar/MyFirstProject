import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaseboardComponent } from 'src/app/daseboard/daseboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ApplicationFormComponent } from 'src/app/application-form/application-form.component';
import {RegistationFormComponent} from 'src/app/registation-form/registation-form.component';
import {ManagePostComponent} from 'src/app/manage-post/manage-post.component';
import {ViewPostComponent} from 'src/app/view-post/view-post.component';
import {ViewAllPostComponent} from 'src/app/view-all-post/view-all-post.component';
import {AddPostComponent} from 'src/app/add-post/add-post.component';
import {EditComponent} from 'src/app/edit/edit.component';
import {RemoveComponent} from 'src/app/remove/remove.component';
import {NotfoundComponent} from 'src/app/notfound/notfound.component';

import { from } from 'rxjs';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Home',component:DaseboardComponent},
  {path:'login',component:LoginComponent},
  {path:'RegForm',component:RegistationFormComponent},
  {path:"ApplyForm",component:ApplicationFormComponent,
    children:[
      {path:"AddPost", component:AddPostComponent},
      {path:"ManagePost", component: PostComponent,
      children:[
        {path:"",component:ManagePostComponent},
        {path:"EditPost",component:EditComponent},
        {path:"RemovePost",component:RemoveComponent},
      ]
    },
      {path:"ViewPost",component:ViewPostComponent},
      {path:"ViewAllPost",component:ViewAllPostComponent},
    ]
},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
