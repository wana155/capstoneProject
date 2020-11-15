import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { InComponent } from './in/in.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'in', component: InComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: 'shop', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
