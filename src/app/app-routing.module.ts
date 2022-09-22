import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { ProductDescriptionComponent } from './component/product-description/product-description.component';
import { ProductsComponent } from './component/products/products.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {
    path:'products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {path:'product',
  component: ProductDescriptionComponent,
  canActivate: [AuthGuard]},
  {path:'cart', component: CartComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
