import {Component, input, output, Signal, signal, OnInit, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import {db} from '../db';
import {liveQuery} from 'dexie';
import {toSignal} from '@angular/core/rxjs-interop';
import {ExerciseType} from '../exercises-list/exercise';

export enum OpenState {
  NOT_TOGGLED, OPEN, CLOSED
}

// Weight increments based on exercise type
const WEIGHT_INCREMENTS: Record<ExerciseType, number> = {
  'barbell': 2.5,      // Olympic barbells - 2.5kg increments (plates on both sides)
  'dumbbell': 2,       // Dumbbells typically go by 2kg
  'machine': 5,        // Machines often have 5kg weight stacks
  'cable': 2.5,        // Cable machines - 2.5kg increments
  'bodyweight': 1      // For weighted bodyweight exercises
};

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './exercise-card.css'
})
export class ExerciseCard implements OnInit {
  readonly exercise = input.required<string>();
  readonly alternatives = input<string[]>([]);
  readonly exerciseType = input<ExerciseType>('machine');

  private readonly savedAlternative = signal<string | undefined>(undefined);

  readonly displayedExercise = computed(() => {
    const saved = this.savedAlternative();
    const original = this.exercise();
    // If we have a saved alternative, use it; otherwise use the original
    return saved || original;
  });

  readonly weightIncrement = computed(() => {
    return WEIGHT_INCREMENTS[this.exerciseType()] || 5;
  });

  readonly repWeight: Signal<number> = toSignal(
    liveQuery(() => {
      const exerciseName = this.displayedExercise();
      if (!exerciseName) {
        return Promise.resolve(0);
      }
      return db.exercises.get(exerciseName).then(ex => ex?.weight ?? 0);
    }),
    {initialValue: 0}
  )

  readonly open = input.required<OpenState>();
  readonly openUpdate = output<void>();

  protected readonly currentAlternativeIndex = signal(0);

  ngOnInit() {
    // Load the saved alternative from database
    db.exercises.get(this.exercise()).then(record => {
      if (record?.selectedAlternative) {
        // Find the index of the saved alternative
        const alts = this.alternatives();
        const savedAltIndex = alts.indexOf(record.selectedAlternative);
        if (savedAltIndex !== -1) {
          this.currentAlternativeIndex.set(savedAltIndex + 1);
          this.savedAlternative.set(record.selectedAlternative);
        } else {
          // If saved alternative no longer exists, use original
          this.savedAlternative.set(undefined);
          this.currentAlternativeIndex.set(0);
        }
      } else {
        // No saved alternative, use original
        this.savedAlternative.set(undefined);
        this.currentAlternativeIndex.set(0);
      }
    });
  }

  updateOpenState() {
    this.openUpdate.emit();
  }

  protected readonly OpenState = OpenState;

  rotateAlternative($event: Event) {
    $event.stopPropagation();
    const alts = this.alternatives();
    if (alts && alts.length > 0) {
      const nextIndex = (this.currentAlternativeIndex() + 1) % (alts.length + 1);
      this.currentAlternativeIndex.set(nextIndex);

      let exerciseName: string;
      // Display the original exercise or an alternative
      if (nextIndex === 0) {
        exerciseName = this.exercise();
        this.savedAlternative.set(undefined);
      } else {
        exerciseName = alts[nextIndex - 1];
        this.savedAlternative.set(exerciseName);
      }

      // Save the selected alternative to database
      this.saveSelectedAlternative(exerciseName);
    }
  }

  private saveSelectedAlternative(exerciseName: string) {
    db.exercises.get(this.exercise()).then(record => {
      if (record) {
        // Update existing record
        db.exercises.update(this.exercise(), {
          selectedAlternative: exerciseName === this.exercise() ? undefined : exerciseName
        });
      } else {
        // Create new record with the selected alternative
        db.exercises.put({
          id: this.exercise(),
          weight: 0,
          selectedAlternative: exerciseName === this.exercise() ? undefined : exerciseName
        });
      }
    });
  }

  hasAlternatives(): boolean {
    return this.alternatives() && this.alternatives().length > 0;
  }

  incrementWeight($event: any) {
    const increment = this.weightIncrement();
    db.exercises.put({id: this.displayedExercise(), weight: (this.repWeight() ?? 0) + increment});
    $event.stopPropagation();
  }

  decrementWeight($event: MouseEvent) {
    const increment = this.weightIncrement();
    db.exercises.put({id: this.displayedExercise(), weight: Math.max((this.repWeight() ?? 0) - increment, 0)});
    $event.stopPropagation();
  }
}
