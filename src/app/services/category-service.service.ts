import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrHandler } from '../share/error-handler';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl='http://localhost:3000/api/v1/category';
  private headers:HttpHeaders;
  constructor(private http:HttpClient) { 
    const token=`${localStorage.getItem('token')||''}`;
    this.headers=new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Accept','*/*')
    .set('Authorization',token);
  }

  create=(category:NgForm)=>{
    return this.http.post(this.baseUrl,JSON.stringify(category),{'headers':this.headers})
    .pipe(catchError(ErrHandler.errorHandler));
  }

  getAll=()=>{
    return this.http.get(this.baseUrl,{'headers':this.headers})
    .pipe(catchError(ErrHandler.errorHandler));
  }
  
  getById=(id:number)=>{
    return this.http.get(`${this.baseUrl}/${id}` ,{'headers':this.headers})
    .pipe(catchError(ErrHandler.errorHandler));
  }
  
  update=(id:number,category:NgForm)=>{
    return this.http.put(`${this.baseUrl}/${id}`,JSON.stringify(category) ,{'headers':this.headers})
    .pipe(catchError(ErrHandler.errorHandler));
  }

  delete=(id:number)=>{
    return this.http.get(`${this.baseUrl}/${id}` ,{'headers':this.headers})
    .pipe(catchError(ErrHandler.errorHandler));
  }
}
