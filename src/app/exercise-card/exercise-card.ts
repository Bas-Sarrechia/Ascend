import {Component, input, output, Signal, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {db} from '../db';
import {liveQuery} from 'dexie';
import {toSignal} from '@angular/core/rxjs-interop';

export enum OpenState {
  NOT_TOGGLED, OPEN, CLOSED
}

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.html',
  standalone: true,
  styleUrl: './exercise-card.css'
})
export class ExerciseCard {
  readonly exercise = input.required<string>();
  readonly steps = input.required<string[]>();
  readonly repWeight: Signal<number> = toSignal(liveQuery(() => db.exercises.get(this.exercise()).then(ex => ex?.weight ?? 0)), {initialValue: 0})
  protected readonly displayKgTracker = signal<boolean>(true);

  readonly open = input.required<OpenState>();
  readonly openUpdate = output<void>();

  updateOpenState() {
    this.openUpdate.emit();
  }

  protected readonly OpenState = OpenState;

  plusFiver($event: any) {
    db.exercises.put({id: this.exercise(), weight: (this.repWeight() ?? 0) + 5});
    $event.stopPropagation();
  }

  minusFiver($event: MouseEvent) {
    db.exercises.put({id: this.exercise(), weight: Math.max((this.repWeight() ?? 0) - 5, 0)});
    $event.stopPropagation();
  }
}

