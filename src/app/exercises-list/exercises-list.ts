import {Component, signal, computed, inject, effect} from '@angular/core';
import {ExerciseCard, OpenState} from '../exercise-card/exercise-card';
import {ActivatedRoute} from '@angular/router';
import {Exercise} from './exercise';
import {EquipmentService} from '../equipment.service';
import {ExerciseSchemaService} from '../exercise-schema.service';

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
  private readonly equipmentService = inject(EquipmentService);
  private readonly schemaService = inject(ExerciseSchemaService);
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly allExercises = signal<Array<Exercise & { open: OpenState }>>([]);
  readonly equipmentType = this.equipmentService.equipmentType;
  private readonly currentPath = signal<'upper-body' | 'lower-body' | 'full-body'>('upper-body');

  readonly exercises = computed(() => {
    return this.allExercises();
  });

  constructor() {
    // Load exercises when route changes
    this.activatedRoute.url.subscribe((url) => {
      const path = url[0]?.path as 'upper-body' | 'lower-body' | 'full-body' || 'upper-body';
      this.currentPath.set(path);
      this.loadExercises();
    });

    // Reload exercises when equipment type changes using effect
    effect(() => {
      this.equipmentType(); // read the signal to create dependency
      this.loadExercises();
    });
  }

  private loadExercises() {
    const schema = this.schemaService.getSchema(this.equipmentType());
    const path = this.currentPath();
    const exercises = schema[path] || [];

    this.allExercises.update(() =>
      exercises.map(e => ({...e, open: OpenState.NOT_TOGGLED}))
    );
  }

  handleCardToggle(i: Exercise & { open: OpenState }) {
    this.allExercises.update(exercises => {
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
}
