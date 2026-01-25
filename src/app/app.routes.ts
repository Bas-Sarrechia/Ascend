import {Routes} from '@angular/router';
import {ExercisesList} from './exercises-list/exercises-list';

export const routes: Routes = [
  {
    path: "upper-body",
    component: ExercisesList
  },
  {
    path: "lower-body",
    component: ExercisesList
  },
  {
    path: "full-body",
    component: ExercisesList
  },
  {
    path: "**",
    redirectTo: "upper-body"
  }
];

