import { Component } from '@angular/core';
import { FoodService } from '../Services/food/food-service.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  foods! : Food [];

  constructor( private foodService : FoodService){


  }

  ngOnInit(){
    this.foods = this.foodService.getAll();
  }

 

}
