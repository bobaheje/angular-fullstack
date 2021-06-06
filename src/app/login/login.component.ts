import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Credential} from '../models/credential';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private invalidLogin: boolean = true;
  submitted:boolean=false;
  loginCredential=new Credential('@ Email','*********');
  constructor(private authService:AuthService,private router:Router) { }

  signIn=(credentials:HTMLFormElement)=>{
    
    this.authService.login(credentials)
      .subscribe(result=>{
        if(result){
          this.router.navigate(['/dashboard']);
        }
        else
        {
          this.invalidLogin=false;
        }
      });

  }

  onSubmit=()=>{
    this.submitted=true;
  }


  ngOnInit(): void {
  }

}
