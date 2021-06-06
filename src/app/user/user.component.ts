import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs-compat/operator/map';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @Input() userInterface:User={'email':'','firstname':'','lastname':'','password':''};
  
  newUser:User[]=[];

  
  constructor(private userService: UserService,private authService:AuthService) { }

  addUser=(user:User)=>{
    this.userService.create(user)
        .subscribe(response=>{
          if(response)
          {
            console.log(response)
          }
          else{
            console.log('Erreur')
          }
        });
  }

  getUserById=(id:number)=>{
    this.userService.getById(id)
    .subscribe(response=>{
      if(response)
      {
        console.log(response)
      }
      else{
        console.log('Erreur')
      }
    });

  }

  getUsers=()=>{
    this.userService.getAll()
    .subscribe((data:User[])=>{
      this.newUser=data;
    });
  }

  update=(id:number,user:User)=>{
    this.userService.update(id,user)
    .subscribe(response=>{
      if(response)
      {
        console.log(response)
      }
      else{
        console.log('Erreur')
      }
    });
  }

  delete=(id:number)=>{
    this.userService.delete(id)
    .subscribe(response=>{
      if(response)
      {
        console.log(response)
      }
      else{
        console.log('Erreur')
      }
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
