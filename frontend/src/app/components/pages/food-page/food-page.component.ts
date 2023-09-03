import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!: Food;
  constructor(activatedRoute: ActivatedRoute, 
    foodService: FoodService, 
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private router: Router) {
    activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id']);
      }
    });
  }

  addToCart() {
    if(this.cartService.addToCart(this.food)) {
      this.snackBar.open('Item already in your cart. You can modify quantity in your Cart page.', 'Close', {
        duration: 3000,
      });
    }
    else {
      this.snackBar.open('Item added to your cart!', 'Close', {
        duration: 3000,
      });
    }
    // this.router.navigateByUrl('/cart-page');
  }
}
