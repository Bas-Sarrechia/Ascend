import { Injectable } from '@angular/core';
import { Exercise } from './exercises-list/exercise';

export type EquipmentType = 'machine' | 'free-weights';

export interface ExerciseSchema {
  'upper-body': Exercise[];
  'lower-body': Exercise[];
  'full-body': Exercise[];
}

@Injectable({
  providedIn: 'root'
})
export class ExerciseSchemaService {
  private readonly machineExercises: { [key: string]: Exercise } = {
    "Leg press": {
      exercise: "Leg press",
      equipment: "machine"
    },
    "Seated leg curl": {
      exercise: "Seated leg curl",
      equipment: "machine"
    },
    "Shoulder press": {
      exercise: "Shoulder press",
      equipment: "machine"
    },
    "Chest press": {
      exercise: "Chest press",
      equipment: "machine"
    },
    "Lat pulldown": {
      exercise: "Lat pulldown",
      equipment: "machine"
    },
    "Bicep curl": {
      exercise: "Bicep curl",
      equipment: "machine"
    },
    "Tricep extensions": {
      exercise: "Tricep extensions",
      equipment: "machine"
    },
    "Abdominal crunch": {
      exercise: "Abdominal crunch",
      equipment: "machine"
    },
    "Pec fly": {
      exercise: "Pec fly",
      equipment: "machine"
    },
    "Mid row": {
      exercise: "Mid row",
      equipment: "machine"
    },
    "Lateral raise": {
      exercise: "Lateral raise",
      equipment: "machine"
    },
    "Crunches": {
      exercise: "Crunches",
      equipment: "machine"
    },
    "Hip abduction": {
      exercise: "Hip abduction",
      equipment: "machine"
    },
    "Leg extensions": {
      exercise: "Leg extensions",
      equipment: "machine"
    },
    "Low back": {
      exercise: "Low back",
      equipment: "machine"
    },
    "Russian twists": {
      exercise: "Russian twists",
      equipment: "machine"
    },
    "Plank": {
      exercise: "Plank",
      equipment: "machine"
    }
  };

  private readonly freeWeightExercises: { [key: string]: Exercise } = {
    "Smith squats": {
      exercise: "Smith squats",
      equipment: "free-weights"
    },
    "Leg press": {
      exercise: "Leg press",
      equipment: "free-weights"
    },
    "Leg extensions": {
      exercise: "Leg extensions",
      equipment: "free-weights"
    },
    "Sled push": {
      exercise: "Sled push",
      equipment: "free-weights"
    },
    "Lunges": {
      exercise: "Lunges",
      equipment: "free-weights"
    },
    "Calf raises": {
      exercise: "Calf raises",
      equipment: "free-weights"
    },
    "Wall slide": {
      exercise: "Wall slide",
      equipment: "free-weights"
    },
    "Mountain climbers": {
      exercise: "Mountain climbers",
      equipment: "free-weights"
    },
    "Knee tucks": {
      exercise: "Knee tucks",
      equipment: "free-weights"
    },
    "Russian twists": {
      exercise: "Russian twists",
      equipment: "free-weights"
    },
    "Incline chest press": {
      exercise: "Incline chest press",
      equipment: "free-weights"
    },
    "Cable fly": {
      exercise: "Cable fly",
      equipment: "free-weights"
    },
    "Lateral raises": {
      exercise: "Lateral raises",
      equipment: "free-weights"
    },
    "Tricep extensions with dumbel": {
      exercise: "Tricep extensions with dumbel",
      equipment: "free-weights"
    },
    "Tricep extensions with device": {
      exercise: "Tricep extensions with device",
      equipment: "free-weights"
    },
    "Tricep dips": {
      exercise: "Tricep dips",
      equipment: "free-weights"
    },
    "V-Bar pull down": {
      exercise: "V-Bar pull down",
      equipment: "free-weights"
    },
    "Lateral pulldown wide V bar": {
      exercise: "Lateral pulldown wide V bar",
      equipment: "free-weights"
    },
    "V-bar rows": {
      exercise: "V-bar rows",
      equipment: "free-weights"
    },
    "Face pulls": {
      exercise: "Face pulls",
      equipment: "free-weights"
    },
    "Bicep curls": {
      exercise: "Bicep curls",
      equipment: "free-weights"
    },
    "Hammer curls": {
      exercise: "Hammer curls",
      equipment: "free-weights"
    }
  };

  private readonly machineSchema: ExerciseSchema = {
    'upper-body': [
      this.machineExercises["Chest press"],
      this.machineExercises["Pec fly"],
      this.machineExercises["Tricep extensions"],
      this.machineExercises["Lat pulldown"],
      this.machineExercises["Mid row"],
      this.machineExercises["Bicep curl"],
      this.machineExercises["Shoulder press"],
      this.machineExercises["Lateral raise"],
      this.machineExercises["Abdominal crunch"],
      this.machineExercises["Crunches"]
    ],
    'lower-body': [
      this.machineExercises["Leg press"],
      this.machineExercises["Hip abduction"],
      this.machineExercises["Leg extensions"],
      this.machineExercises["Seated leg curl"],
      this.machineExercises["Low back"],
      this.machineExercises["Abdominal crunch"],
      this.machineExercises["Crunches"],
      this.machineExercises["Russian twists"],
      this.machineExercises["Plank"]
    ],
    'full-body': [
      this.machineExercises["Leg press"],
      this.machineExercises["Seated leg curl"],
      this.machineExercises["Shoulder press"],
      this.machineExercises["Chest press"],
      this.machineExercises["Lat pulldown"],
      this.machineExercises["Bicep curl"],
      this.machineExercises["Tricep extensions"],
      this.machineExercises["Abdominal crunch"]
    ]
  };

  private readonly freeWeightSchema: ExerciseSchema = {
    'upper-body': [
      this.freeWeightExercises["Incline chest press"],
      this.freeWeightExercises["Chest press"],
      this.freeWeightExercises["Cable fly"],
      this.freeWeightExercises["Shoulder press"],
      this.freeWeightExercises["Lateral raises"],
      this.freeWeightExercises["Tricep extensions with dumbel"],
      this.freeWeightExercises["Tricep extensions with device"],
      this.freeWeightExercises["Tricep dips"]
    ],
    'lower-body': [
      this.freeWeightExercises["Smith squats"],
      this.freeWeightExercises["Leg press"],
      this.freeWeightExercises["Leg extensions"],
      this.freeWeightExercises["Sled push"],
      this.freeWeightExercises["Lunges"],
      this.freeWeightExercises["Calf raises"],
      this.freeWeightExercises["Wall slide"],
      this.freeWeightExercises["Mountain climbers"],
      this.freeWeightExercises["Knee tucks"],
      this.freeWeightExercises["Russian twists"]
    ],
    'full-body': [
      this.freeWeightExercises["V-Bar pull down"],
      this.freeWeightExercises["Lateral pulldown wide V bar"],
      this.freeWeightExercises["V-bar rows"],
      this.freeWeightExercises["Face pulls"],
      this.freeWeightExercises["Bicep curls"],
      this.freeWeightExercises["Hammer curls"]
    ]
  };

  getSchema(equipment: EquipmentType): ExerciseSchema {
    return equipment === 'machine' ? this.machineSchema : this.freeWeightSchema;
  }
}
