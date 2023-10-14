import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { BrandsComponent } from './component/brands/brands.component';
import { NavbarAuthComponent } from './component/navbar-auth/navbar-auth.component';
import { NavbarBlankComponent } from './component/navbar-blank/navbar-blank.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CutTextPipe } from './guaed/cut-text.pipe';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { PayMentComponent } from './component/pay-ment/pay-ment.component';
import { AllOrdersComponent } from './component/all-orders/all-orders.component';
import { BrandDetailsComponent } from './component/brand-details/brand-details.component';
import { SearchPipe } from './search.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { CategoryDetailsComponent } from './component/category-details/category-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    NavbarAuthComponent,
    NavbarBlankComponent,
    FooterComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    CutTextPipe,
    ProductsDetailsComponent,
    PayMentComponent,
    AllOrdersComponent,
    BrandDetailsComponent,
    SearchPipe,
    WishListComponent,
    ForgotPasswordComponent,
    CategoryDetailsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    FormsModule,
    NgxSpinnerModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:LoadingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
