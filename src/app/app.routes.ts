import {Routes} from '@angular/router';
import {ExercisesList} from './exercises-list/exercises-list';
import {Exercise} from './exercises-list/exercise';

const exercises: { [key: string]: Exercise } = {
  "Leg press": {
    exercise: "Leg press",
    steps: [
      "Ga zitten met de rug tegen de leuning",
      "Plaats je voeten midden op de plaat",
      "Duw de plaat van je weg door je benen net niet volledig te strekken",
      "Laat de plaat rustig terug komen"
    ]
  },
  "Seated leg curl": {
    exercise: "Seated leg curl",
    steps: [
      "Ga zitten met de rug tegen de leuning en neem de handgrepen vast",
      "Plaats je onderbenen onder de rol",
      "Strek je benen en duw zo het gewicht omhoog",
      "Laat langzaam je benen terug zakken"
    ]
  },
  "Shoulder press": {
    exercise: "Shoulder press",
    steps: [
      "Ga zitten met de rug tegen de leuning en neem de handgrepen vast",
      "Duw het gewicht omhoog door de armen te strekken",
      "Laat langzaam terug zakken"
    ]
  },
  "Chest press": {
    exercise: "Chest press",
    steps: [
      "Ga zitten met de rug tegen de leuning en neem de handgrepen vast",
      "Duw het gewicht naar voor zonder je armen volledig te strekken",
      "Laat langzaam weer naar je toe komen"
    ]
  },
  "Lat pulldown": {
    exercise: "Lat pulldown",
    steps: [
      "Neem eerst de handgrepen vast en ga zitten met de bovenbenen onder de rollen.",
      "Duw je borst vooruit",
      "Trek de grepen naar je toe",
      "Laat langzaam weer omhoog komen zonder volledig los te laten."
    ]
  },
  "Bicep curl": {
    exercise: "Bicep curl",
    steps: [
      "Ga zitten met de rug tegen de leuning en neem de handgrepen vast",
      "Strek je armen en laat je bovenarmen rusten op de kussentjes",
      "Duw de gewichten naar onder door de armen te strekken."
    ]
  },
  "Tricep extensions": {
    exercise: "Tricep extensions",
    steps: [
      "Ga zitten met de rug tegen de leuning en neem de handgrepen vast",
      "leg je bovenarmen tegen de kussentjes",
      "Duw de gewichten naar onder door de armen te strekken."
    ]
  },
  "Abdominal crunch": {
    exercise: "Abdominal crunch",
    steps: [
      "Ga zitten met de rug tegen de leuning en neem de handgrepen vast.",
      "Buig voorover door de buik op te spannen",
      "Kom rustig weer recht"
    ]
  },
  "Pec fly": {
    exercise: "Pec fly",
    steps: [
      "Ga zitten met de rug tegen de leuning en neem de handgrepen vast.",
      "Neem de handgrepen vast en leg onderarmen tegen de kussentjes.",
      "Duw de rollen voor de borst naar elkaar toe",
      "Laat rustig weer terug gaan."
    ]
  },
  "Mid row": {
    exercise: "Mid row",
    steps: ["Ga met de borst tegen de leuning zitten en neem de handgrepen vast.", "Trek de de handgrepen naar je toe door de ellebogen naar binnen te trekken", "Laat rustig terug gaan"]
  },
  "Lateral raise": {
    exercise: "Lateral raise",
    steps: ["Ga zitten met de rug tegen de leuning en neem de handgrepen vast.", "Leg de onderarmen tegen de rollen", "Duw de gewichten naar boven tot op schouderhoogte", "Laat langzaam terug neer komen."],
  },
  "Crunches": {
    exercise: "Crunches",
    steps: ["Ga liggen op je rug en plaats je voeten plat op de grond", "Leg je handen achter je hoofd", "Span je buik pp en kom met schouders van de grond", "Trek niet aan je hoofd en houd je ellenbogen open."]
  },
  "Hip abduction": {
    exercise: "Hip abduction",
    steps: ["Ga zitten met de rug tegen de leuning en neem de hendels vast", "Plaats je knieeen tegen de kussentjes", "Duw de kussentjes naar binnen."]
  },
  "Leg extensions": {
    exercise: "Leg extensions",
    steps: ["Ga zitten met de rug tegen de leuning en neem de handgrepen vast.", "Plaats de onderbenen onder de rol", "Strek je benen en duw zo het gewicht naar boven.", "Laat je benen langzaam terug zakken"]
  },
  "Low back": {
    exercise: "Low back",
    steps: ["Ga zitten met de rug tegen de leuning en houdt je armen gekruist voor je.", "Dow het bovenste kussen naar achtern door je rug te strekken en buig dan rustig weer voorover."]
  },
  "Russian twists": {
    exercise: "Russian twists",
    steps: ["Ga zitten op een matje", "Leun licht achterover en plaats je hielen", "Draai enkel met je bovenlichaam rustig van links naar rechts."]
  },
  "Plank": {
    exercise: "Plank",
    steps: ["Steun op je ellenbogen en tenen,", "Vorm een rechte lijn en span je benen en buik op.", "Kijk naar de grond voor je."]
  }
};

const data = {
  "upper-body": {
    exercises: ["Chest press", "Pec fly", "Tricep extensions", "Lat pulldown", "Mid row", "Bicep curl", "Shoulder press", "Lateral raise", "Abdominal crunch", "Crunches"]
  },
  "lower-body": {
    exercises: ["Leg press", "Hip abduction", "Leg extensions", "Seated leg curl", "Low back", "Abdominal crunch", "Crunches", "Russian twists", "Plank"]
  },
  "full-body": {
    exercises: ["Leg press", "Seated leg curl", "Shoulder press", "Chest press", "Lat pulldown", "Bicep curl", "Tricep extensions", "Abdominal crunch"]
  }
}

function enrich(data: { exercises: string[] }): Exercise[] {
  return data.exercises.map(e => exercises[e]);
}

export const routes: Routes = [
  {
    path: "upper-body",
    data: enrich(data['upper-body']),
    component: ExercisesList
  },
  {
    path: "lower-body",
    data: enrich(data["lower-body"]),
    component: ExercisesList
  },
  {
    path: "full-body",
    data: enrich(data["full-body"]),
    component: ExercisesList
  },
  {
    path: "**",
    redirectTo: "upper-body"
  }
];

