import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ProductdetailsComponent } from './pages/productDetails/productdetails/productdetails.component';

export const routes: Routes = [

{path:'',redirectTo:'home', pathMatch:'full'},
{path:'home', component:HomeComponent , title:'Home'},
{path:'product-details/:p_id',loadComponent:()=>import('./pages/productDetails/productdetails/productdetails.component').then((classes)=>classes.ProductdetailsComponent),title:'Product Details'},


];
