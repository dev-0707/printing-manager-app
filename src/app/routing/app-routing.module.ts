import { LocationComponent } from './../locations/locations/location.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'locations', component: LocationComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}