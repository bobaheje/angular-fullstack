import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user-service.service';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './services/category-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
