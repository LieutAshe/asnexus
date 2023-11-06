import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlurComponent } from './blur/blur.component';
import { SignupLoginTabComponent } from './signup-login-tab/signup-login-tab.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdsSectionComponent } from './ads-section/ads-section.component';
import { CategoriesComponent } from './categories/categories.component';
import { SaleComponent } from './sale/sale.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
