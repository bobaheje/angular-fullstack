import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CategoryService } from '../services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  addCategory=(categoryForm:NgForm)=>{
    this.categoryService.create(categoryForm.value)
      .pipe(map(response=>{
        const result =response
        return result;
      }))
      .subscribe(response=>{
        console.log(response)
      })
  }

  ngOnInit(): void {
  }

}
