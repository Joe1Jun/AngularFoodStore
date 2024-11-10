import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../Services/food/food-service.service';
import { CommonModule } from '@angular/common';
import { TagsComponent } from "../tags/tags.component";

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, TagsComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  food! : Food;

   constructor(private route : ActivatedRoute , private foodService : FoodService){
     route.params.subscribe((params) => {

      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      }
     })

   }

  

}
