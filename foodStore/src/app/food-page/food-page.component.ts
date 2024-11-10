import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../Services/food/food-service.service';
import { CommonModule } from '@angular/common';
import { TagsComponent } from "../tags/tags.component";
import { CartService } from '../Services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, TagsComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  food! : Food;

   constructor(private route : ActivatedRoute , 
    private foodService : FoodService , 
    private cartService : CartService,
    private router : Router){
     route.params.subscribe((params) => {

      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      }
     })

   }

   addToCart(){
      this.cartService.addToCart(this.food)
      this.router.navigateByUrl('/cart-page')

   }

  

}
