import { Component } from '@angular/core';
import { CartService } from '../Services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../Services/food/food-service.service';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
 





  cart! : Cart;


  constructor(private cartService : CartService, private foodService : FoodService){
    let foods = foodService.getAll();
    cartService.addToCart(foods[1]);
    cartService.addToCart(foods[2]);
    cartService.addToCart(foods[4]);
    this.setCart()
  }

  
  

  ngOnInit(){

  }

  removeFromCart(cartItem : CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem : CartItem , quantityInString : string){

    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();

  }

  setCart(){
    this.cart = this.cartService.getCart();
    console.log(this.cart.items)
  }

}
