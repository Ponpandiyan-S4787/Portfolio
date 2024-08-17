import { Routes } from '@angular/router';
import { HomeComponent } from '../../projects/home-smart/src/public-api';

export const routes: Routes = [
    {path:"", redirectTo:"Home", pathMatch:"full"},
    {path:"Home",component:HomeComponent}
];
