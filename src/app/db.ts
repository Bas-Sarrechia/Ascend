import Dexie, {Table} from 'dexie';

interface ExerciseRecord {
  id: string,
  weight: number
}

export class AppDB extends Dexie {
  exercises!: Table<ExerciseRecord, string>;

  constructor() {
    super("Ascend");
    this.version(1).stores({
      exercises: 'id'
    });
  }
}

export const db = new AppDB();
