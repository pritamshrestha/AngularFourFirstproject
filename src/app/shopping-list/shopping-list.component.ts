import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] =[
new Ingredient('Apples', 5),new Ingredient('potatos',10)];
employees=[];


  constructor(private employeeservice:EmployeeService) { }

  ngOnInit() {
  this.employeeservice.getEmployee().subscribe(resemployeeData=>this.employees=resemployeeData);
  }

}
