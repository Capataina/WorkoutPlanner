import ExerciseDayCard from "./ExerciseDayCard"
import { Exercise } from "@/store/Exercises"

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

interface ExerciseDayTableProps {
  exercises: Record<string, Exercise[]>;
  onDeleteExercise?: (dayName: string, index: number) => void;
  onSwapExercises?: (dayName: string, index1: number, index2: number) => void;
}

export default function ExerciseDayTable({ exercises, onDeleteExercise, onSwapExercises }: ExerciseDayTableProps) {
  return (
    <div className="exercise-day-table">
      {DAYS_OF_WEEK.map((day) => (
        <ExerciseDayCard 
          key={day} 
          dayName={day} 
          exercises={exercises[day] || []} 
          onDeleteExercise={onDeleteExercise}
          onSwapExercises={onSwapExercises}
        />
      ))}
    </div>
  )
}