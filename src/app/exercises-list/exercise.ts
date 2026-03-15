export type ExerciseType = 'barbell' | 'dumbbell' | 'machine' | 'cable' | 'bodyweight';

export interface Exercise {
  exercise: string,
  equipment?: 'machine' | 'free-weights',
  type?: ExerciseType,
  alternatives?: string[]
}
