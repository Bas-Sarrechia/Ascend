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
      equipment: "machine",
      type: "machine"
    },
    "Seated leg curl": {
      exercise: "Seated leg curl",
      equipment: "machine",
      type: "machine"
    },
    "Shoulder press": {
      exercise: "Shoulder press",
      equipment: "machine",
      type: "machine"
    },
    "Chest press": {
      exercise: "Chest press",
      equipment: "machine",
      type: "machine"
    },
    "Lat pulldown": {
      exercise: "Lat pulldown",
      equipment: "machine",
      type: "machine"
    },
    "Bicep curl": {
      exercise: "Bicep curl",
      equipment: "machine",
      type: "machine"
    },
    "Tricep extensions": {
      exercise: "Tricep extensions",
      equipment: "machine",
      type: "machine"
    },
    "Abdominal crunch": {
      exercise: "Abdominal crunch",
      equipment: "machine",
      type: "machine"
    },
    "Pec fly": {
      exercise: "Pec fly",
      equipment: "machine",
      type: "machine"
    },
    "Mid row": {
      exercise: "Mid row",
      equipment: "machine",
      type: "machine"
    },
    "Lateral raise": {
      exercise: "Lateral raise",
      equipment: "machine",
      type: "machine"
    },
    "Crunches": {
      exercise: "Crunches",
      equipment: "machine",
      type: "bodyweight"
    },
    "Hip abduction": {
      exercise: "Hip abduction",
      equipment: "machine",
      type: "machine"
    },
    "Leg extensions": {
      exercise: "Leg extensions",
      equipment: "machine",
      type: "machine"
    },
    "Low back": {
      exercise: "Low back",
      equipment: "machine",
      type: "machine"
    },
    "Russian twists": {
      exercise: "Russian twists",
      equipment: "machine",
      type: "bodyweight"
    },
    "Plank": {
      exercise: "Plank",
      equipment: "machine",
      type: "bodyweight"
    }
  };

  private readonly freeWeightExercises: { [key: string]: Exercise } = {
    "Smith squats": {
      exercise: "Smith squats",
      equipment: "free-weights",
      type: "barbell"
    },
    "Leg press": {
      exercise: "Leg press",
      equipment: "free-weights",
      type: "machine"
    },
    "Leg extensions": {
      exercise: "Leg extensions",
      equipment: "free-weights",
      type: "machine"
    },
    "Sled push": {
      exercise: "Sled push",
      equipment: "free-weights",
      type: "machine"
    },
    "Lunges": {
      exercise: "Lunges",
      equipment: "free-weights",
      type: "dumbbell"
    },
    "Calf raises": {
      exercise: "Calf raises",
      equipment: "free-weights",
      type: "machine"
    },
    "Wall slide": {
      exercise: "Wall slide",
      equipment: "free-weights",
      type: "bodyweight"
    },
    "Mountain climbers": {
      exercise: "Mountain climbers",
      equipment: "free-weights",
      type: "bodyweight"
    },
    "Knee tucks": {
      exercise: "Knee tucks",
      equipment: "free-weights",
      type: "bodyweight"
    },
    "Russian twists": {
      exercise: "Russian twists",
      equipment: "free-weights",
      type: "bodyweight"
    },
    "Incline chest press": {
      exercise: "Incline chest press",
      equipment: "free-weights",
      type: "dumbbell",
      alternatives: ["Smith machine chest press"]
    },
    "Smith machine chest press": {
      exercise: "Smith machine chest press",
      equipment: "free-weights",
      type: "barbell",
      alternatives: ["Incline chest press"]
    },
    "Chest press": {
      exercise: "Chest press",
      equipment: "free-weights",
      type: "dumbbell"
    },
    "Cable fly": {
      exercise: "Cable fly",
      equipment: "free-weights",
      type: "cable"
    },
    "Lateral raises": {
      exercise: "Lateral raises",
      equipment: "free-weights",
      type: "dumbbell"
    },
    "Tricep extensions with dumbel": {
      exercise: "Tricep extensions with dumbel",
      equipment: "free-weights",
      type: "dumbbell"
    },
    "Tricep extensions with device": {
      exercise: "Tricep extensions with device",
      equipment: "free-weights",
      type: "cable"
    },
    "Tricep dips": {
      exercise: "Tricep dips",
      equipment: "free-weights",
      type: "bodyweight"
    },
    "V-Bar pull down": {
      exercise: "V-Bar pull down",
      equipment: "free-weights",
      type: "cable"
    },
    "Lateral pulldown wide V bar": {
      exercise: "Lateral pulldown wide V bar",
      equipment: "free-weights",
      type: "cable"
    },
    "V-bar rows": {
      exercise: "V-bar rows",
      equipment: "free-weights",
      type: "cable"
    },
    "Face pulls": {
      exercise: "Face pulls",
      equipment: "free-weights",
      type: "cable"
    },
    "Bicep curls": {
      exercise: "Bicep curls",
      equipment: "free-weights",
      type: "dumbbell"
    },
    "Hammer curls": {
      exercise: "Hammer curls",
      equipment: "free-weights",
      type: "dumbbell"
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
      this.machineExercises["Shoulder press"],
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
