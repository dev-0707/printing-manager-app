import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LocationListComponent } from '../locations/location-list/location-list.component';
import { LocationComponent } from '../locations/location/location.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'locations', component: LocationListComponent},
  { path: 'locations/:id', component: LocationComponent},
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
