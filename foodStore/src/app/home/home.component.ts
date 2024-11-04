import { Component } from '@angular/core';
import { FoodService } from '../Services/food/food-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  pathsToImages! : string [];

  constructor( private foodService : FoodService){


  }

  ngOnInit(){
    this.pathsToImages = this.foodService.getAll();
  }

 

}
