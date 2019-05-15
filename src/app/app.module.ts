import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DaseboardComponent } from './daseboard/daseboard.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { RegistationFormComponent } from './registation-form/registation-form.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ViewAllPostComponent } from './view-all-post/view-all-post.component';
import { RemoveComponent } from './remove/remove.component';
import { EditComponent } from './edit/edit.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    DaseboardComponent,
    LoginComponent,
    NotfoundComponent,
    ApplicationFormComponent,
    RegistationFormComponent,
    AddPostComponent,
    ManagePostComponent,
    ViewPostComponent,
    ViewAllPostComponent,
    RemoveComponent,
    EditComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
