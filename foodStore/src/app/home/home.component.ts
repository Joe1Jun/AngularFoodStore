import { Component } from '@angular/core';
import { FoodService } from '../Services/food/food-service.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  foods! : Food [];

  constructor( private foodService : FoodService, private route : ActivatedRoute){


  }

  ngOnInit() {
    this.foods = this.foodService.getAll();
    this.route.params.subscribe(params => {
      console.log('Params:', params);
      if (params['searchTerm']) {
        this.foods = this.foodService.getAll().filter(food =>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
        );
        console.log('Filtered foods:', this.foods);
      }
    });
  }

 
  


}
