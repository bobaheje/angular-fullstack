import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:any;
  url="http://localhost:3000/api/v1/login";
  constructor(private http:HttpClient) { 
    let token=localStorage.getItem('token');
    
    if(token && token!='undefined'){
      const jwt=new JwtHelperService();
      this.currentUser=jwt.decodeToken(token)
    }
  }
  login=(credentials:HTMLFormElement)=>{
    
    const headers=new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Accept','*/*');
   
      return this.http.post(this.url,JSON.stringify(credentials),{'headers':headers})
        .pipe(map((response:any)=>{
          let result=response;
          if(result){
            //console.log(`le token ${result}`)
            localStorage.setItem('token',result);
            return true;
          }
          else{
            return false;
          }
        }));
        
  }
  logout=()=>{
    localStorage.removeItem("token");
  }
  isLoggedIn=()=>{
    
    let jwt=new JwtHelperService();
    let token=localStorage.getItem('token')||'';
    return !jwt.isTokenExpired(token);
    
  }

  getCurrentUser=()=>{
    let token=localStorage.getItem('token');
    if(!token) return null;
    return new JwtHelperService().decodeToken(token);

  }

  
}
