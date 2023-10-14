import { BrandDetailsComponent } from './component/brand-details/brand-details.component';
import { AllOrdersComponent } from './component/all-orders/all-orders.component';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { BrandsComponent } from './component/brands/brands.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './guaed/auth.guard';
import { PayMentComponent } from './component/pay-ment/pay-ment.component';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { CategoryDetailsComponent } from './component/category-details/category-details.component';

const routes: Routes = [

  {path:'',component:BlankLayoutComponent,children:[
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',   canActivate: [authGuard] ,  component:HomeComponent,title:'home'},
    {path:'cart',   canActivate: [authGuard] , component:CartComponent,title:'cart'},
    {path:'product',   canActivate: [authGuard] , component:ProductsComponent,title:'product'},
    {path:'productsDetails/:id',   canActivate: [authGuard] , component:ProductsDetailsComponent,title:'productsDetails'},
    {path:'categories',   canActivate: [authGuard] , component:CategoriesComponent,title:'categories'},
    {path:'categoriesDetails/:id',   canActivate: [authGuard] , component:CategoryDetailsComponent,title:'categoriesDetails'},
    {path:'brands',   canActivate: [authGuard] , component:BrandsComponent,title:'brands'},
    {path:'payment/:id',   canActivate: [authGuard] , component:PayMentComponent,title:'payment'},
    {path:'allorders',   canActivate: [authGuard] , component:AllOrdersComponent,title:'allorders'},
    {path:'brandDetails/:id',   canActivate: [authGuard] , component:BrandDetailsComponent,title:'brandDetails'},
    {path: 'wishlist' ,canActivate: [authGuard] , component:WishListComponent, title:'wishlist'},
  ]},

{path:'',component:AuthLayoutComponent,children:[
  {path:'login', component:LoginComponent,title:''},
  {path:'register', component:RegisterComponent,title:''},
  {path: 'forgotpassword' , component:ForgotPasswordComponent, title:'forgotpassword'},

]},

  {path:'**', component:NotfoundComponent,title:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
