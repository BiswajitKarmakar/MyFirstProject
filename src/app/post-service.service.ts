import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { apiModel } from './apiModel';
import { of } from 'rxjs';
import { itemsModel } from './itemsModel';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor( private http:HttpClient) { }
getItems():Observable<itemsModel[]>{
  return of([
    {name:'asd',roll:343},
    {name:'www',roll:11},
  ])
}
  login(logindata){
    console.log(logindata);
    return this.http.post<apiModel>('http://localhost:3000/api/user/login',logindata,{headers:new HttpHeaders({
      'Content-Type':'application/json'
    })})
  }

  AddPost(data){
    
    return this.http.post('http://localhost:3000/api/auth/post/addpost',data,{headers:new HttpHeaders({
      'authorization':localStorage.getItem('token'),
      'Content-Type':'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
    })}
    )}

  viewAllPost(){
    return this.http.get<apiModel>('http://localhost:3000/api/auth/post/postProfile',{headers:new HttpHeaders({
      'authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzNDM1ZDFkYzFlMDMzYWNhNDJhMzAiLCJuYW1lIjoiQmlzd2FqaXQiLCJlbWFpbCI6ImJAZy5jb20iLCJsb2NhdGlvbiI6Ik1hbGRhIiwiYWdlIjoyMywiaWF0IjoxNTU0MjA2NDk4fQ.vejVW3H_svwIM8efuWWk5rDcqP8g2SAkzGiknpM_gV0'
    })}
      
      )
  };

  FetchPost():Observable<apiModel>{
    return this.http.get<apiModel>('http://localhost:3000/api/auth/post/postProfile',{headers:new HttpHeaders({
      'authorization':localStorage.getItem('token'),
      //'Content-Type':'application/json',
  })
}
    )};

    viewActiveUserPost():Observable<apiModel>{
     const headers=new HttpHeaders({
        'authorization':localStorage.getItem('token'),
      'Content-Type':'application/json',
      })

      return this.http.get<apiModel>('http://localhost:3000/api/auth/post/viewActiveUserPost',{headers})
    };

    editActivePost():Observable<apiModel>{
      const headers = new HttpHeaders({
        'authorization':localStorage.getItem('token'),
        'Content-Type':'application/json',
      })
      return this.http.post<apiModel>('http://localhost:3000/api/auth/post/editActivePost','user_id',{headers})
    };

    removePost():Observable<apiModel>{
      const headers = new HttpHeaders({
        'authorization':localStorage.getItem('token'),
        'Content-Type':'application/json',
    })
    return this.http.post<apiModel>('http://localhost:3000/api/auth/post/removePost',{headers})
  };


/*
  profileUpdate(){
    return this.http.post('http:http://localhost:3000/api/auth/user/ profileUpdate',{name:'sdsad',password:'34534'},{headers:new HttpHeaders({
      'authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzNDM1ZDFkYzFlMDMzYWNhNDJhMzAiLCJuYW1lIjoiQmlzd2FqaXQiLCJlbWFpbCI6ImJAZy5jb20iLCJsb2NhdGlvbiI6Ik1hbGRhIiwiYWdlIjoyMywiaWF0IjoxNTU0MjA2NDk4fQ.vejVW3H_svwIM8efuWWk5rDcqP8g2SAkzGiknpM_gV0'
    })})
  }
  */

}
