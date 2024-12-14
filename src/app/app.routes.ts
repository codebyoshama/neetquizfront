import { Routes } from '@angular/router';
import {LevelComponent} from "./level/level.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'levels', component: LevelComponent}
];
