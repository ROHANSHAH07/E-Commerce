import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService,private apiservice:ApiService,private route:Router) { }

  ngOnInit(): void {
    this.apiservice.getuserdata();
    localStorage.getItem('Products')
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
   alert('Cart Is Empty! You can Shopping Again!');
    this.route.navigate(['products'])
  }

  checkout()
  {
    alert('Successfully Done! Visit Again!');
    this.emptycart();
  }

}
