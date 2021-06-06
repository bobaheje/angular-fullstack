import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string='http://localhost:3000/api/v1/user';
  private headers:HttpHeaders;
  constructor(private http:HttpClient) { 
    const token=`${localStorage.getItem('token')||''}`;
    this.headers=new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Accept','*/*')
    .set('Authorization',token);
    
  }
  create=(user:User):Observable<User>=>{
    return this.http.post<User>(`${this.baseUrl}`,JSON.stringify(user),{'headers':this.headers})
            .pipe(catchError(this.errorHandler));
  }

  getById=(id:number):Observable<User>=>{
    return this.http.get<User>(`${this.baseUrl}/${id}`,{'headers':this.headers})
            .pipe(catchError(this.errorHandler));
  }
  
  getAll=():Observable<User[]>=>{
    return this.http.get<User[]>(`${this.baseUrl}`,{'headers':this.headers})
            .pipe(catchError(this.errorHandler));
  }
  
  update=(id:number,user:User):Observable<User>=>{
    return this.http.put<User>(`${this.baseUrl}/${id}`,JSON.stringify(user),{'headers':this.headers})
            .pipe(catchError(this.errorHandler));
  }
  delete=(id:number):Observable<User>=>{
    return this.http.delete<User>(`${this.baseUrl}/${id}`,{'headers':this.headers})
            .pipe(catchError(this.errorHandler));
  }


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
