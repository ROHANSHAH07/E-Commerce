import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient,private route:Router) { }


//User Login API
loginuser(userdata:any){
  return this.http.post<any>("http://localhost:3000/User",userdata)
  .subscribe((res:any) => {
    if(res){
      alert("Login Successfully!!");
      localStorage.setItem('User',res.email);


    }else{
      alert("You Entered Wrong Credentails! Try Again!!")
    }
  })

}

//Get User Data
getuserdata(){
  localStorage.getItem('User')
}

  //Get All Products API
  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get Single product base on id
getsingleproduct(id:any){
  return this.http.get<any>(`https://fakestoreapi.com/products/${id}`)
  .pipe(map((res:any)=>{
    return res;
    localStorage.setItem('Products',res)
  }))
}


}
