import './App.css'
import { useState } from 'react'
import WeeklyMusclePanel from './Components/WeeklyMusclePanel/WeeklyMusclePanel'
import ExercisePanel from './Components/ExercisePanel/ExercisePanel'
import { TooltipProvider } from '@/Components/ui/tooltip'
import { Exercise } from '@/store/Exercises'

export interface DayExercise {
  id: string;
  exercise: Exercise;
  sets: number;
}
type DayExercises = Record<string, DayExercise[]>;

function App() {
  const [dayExercises, setDayExercises] = useState<DayExercises>({});

  return (
    <TooltipProvider>
      <div className="dark">
        <ExercisePanel dayExercises={dayExercises} setDayExercises={setDayExercises} />
        <WeeklyMusclePanel dayExercises={dayExercises} />
      </div>
    </TooltipProvider>
  )
}

export default App
