import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes, provideRouter } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'list/:categoryid', component: ProductListComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterOutlet],
  exports: [RouterModule],  
  providers: [provideRouter(routes)]
})
export class AppRoutingModule { }
