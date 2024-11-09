import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
   {path : '' , component:HomeComponent},
   {path: 'search/:searchTerm', component:HomeComponent},
   {path: 'tag/:tag', component:HomeComponent}
   
];
