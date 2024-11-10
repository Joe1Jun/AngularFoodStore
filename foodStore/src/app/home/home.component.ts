import { Component } from '@angular/core';
import { FoodService } from '../Services/food/food-service.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TagsComponent } from "../tags/tags.component";




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, TagsComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  foods! : Food [];

  constructor( private foodService : FoodService, private route : ActivatedRoute){


  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = this.foodService.getAll();
    })
  }
}
  
  
  



