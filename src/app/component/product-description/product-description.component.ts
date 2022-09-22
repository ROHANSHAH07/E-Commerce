import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  public productList : any = [] ;
  public filterCategory : any
  searchKey:string ="";
  id:any;
  categorey:any;
  description:any;
  img:any;
  price:any;
  rating:any;

  constructor(private api : ApiService, private cartService : CartService,private activatedRoute:ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe((res) => {
        this.id = res.source

    })

   }

  ngOnInit(): void {
    this.api.getuserdata();
    this.getproduct();
    localStorage.getItem('Products')

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  //Get ALL Product By id
  getproduct(){
    this.api.getsingleproduct(this.id).subscribe((res:any) => {
      this.categorey = res.category;
      this.description = res.description;
      this.img = res.image;
      this.price = res.price;
      this.rating = res.rating.rate;

    })

  }

}
