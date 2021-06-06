import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() featureSelected=new EventEmitter<string>();
  loadedFeature = 'user';
  constructor(private authService:AuthService,private router:Router) { 
    //this.onMenuSelected=new EventEmitter();
  }

  onSelect=(feature:string)=>{
    this.featureSelected.emit(feature);
  }

  ngOnInit(): void {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/signin']);
    } 
    
  }
  
  onNavigate=(event: string)=>{
    this.loadedFeature=event;
  }
  

}
