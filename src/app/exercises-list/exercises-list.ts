import {Component, signal} from '@angular/core';
import {ExerciseCard, OpenState} from '../exercise-card/exercise-card';
import {ActivatedRoute} from '@angular/router';
import {Exercise} from './exercise';

@Component({
  selector: 'app-exercises-list',
  imports: [
    ExerciseCard
  ],
  templateUrl: './exercises-list.html',
  standalone: true,
  styleUrl: './exercises-list.css'
})
export class ExercisesList {
  protected readonly exercises = signal<Array<Exercise & { open: OpenState }>>([]);

  constructor(private readonly activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe((e) => {
      this.exercises.update(() => Object.values(e).map(e => ({...e, open: OpenState.NOT_TOGGLED})));
    })
  }

  handleCardToggle(i: Exercise & { open: OpenState }) {
    this.exercises.update(exercises => {
      return exercises.map(e => {
        if (i === e){
          if(i.open === OpenState.OPEN){
            return ({...e, open: OpenState.CLOSED});
          }
          return ({...e, open: OpenState.OPEN});
        }
        if(e.open === OpenState.OPEN){
          return ({...e, open: OpenState.CLOSED});
        }
        return e
      });
    });
  }

  openCard(i: Exercise) {
    return undefined;
  }
}

