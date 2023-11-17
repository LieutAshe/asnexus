import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlurComponent } from './blur/blur.component';
import { SignupLoginTabComponent } from './signup-login-tab/signup-login-tab.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdsSectionComponent } from './home/ads-section/ads-section.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { SaleComponent } from './home/sale/sale.component';
import { ShippingComponent } from './home/shipping/shipping.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlurComponent,
    SignupLoginTabComponent,
    NavbarComponent,
    AdsSectionComponent,
    CategoriesComponent,
    SaleComponent,
    ShippingComponent,
    FooterComponent,
    ProfileComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
