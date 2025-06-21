import ExerciseDayCard from "./ExerciseDayCard"
import { Button } from "@/Components/ui/button";
import { Plus } from "lucide-react";
import { DayExercise } from "@/App";

type DayExercises = Record<string, DayExercise[]>;

interface ExerciseDayTableProps {
  days: string[];
  exercises: DayExercises;
  onDeleteExercise: (dayName: string, exerciseId: string) => void;
  onSwapExercises: (dayName: string, index1: number, index2: number) => void;
  onAddDay: () => void;
  onDeleteDay: (dayName: string) => void;
  onRenameDay: (oldName: string, newName: string) => void;
  onSetCountChange: (dayName: string, exerciseId: string, sets: number) => void;
}

export default function ExerciseDayTable({
  days,
  exercises,
  onDeleteExercise,
  onSwapExercises,
  onAddDay,
  onDeleteDay,
  onRenameDay,
  onSetCountChange
}: ExerciseDayTableProps) {
  return (
    <div className="exercise-day-table">
      {days.map((day) => (
        <ExerciseDayCard
          key={day}
          dayName={day}
          exercises={exercises[day] || []}
          onDeleteExercise={onDeleteExercise}
          onSwapExercises={onSwapExercises}
          onDeleteDay={() => onDeleteDay(day)}
          onRenameDay={(newName) => onRenameDay(day, newName)}
          onSetCountChange={onSetCountChange}
        />
      ))}
      <Button onClick={onAddDay} variant="outline" className="h-full">
        <Plus className="h-8 w-8" />
        Add Day
      </Button>
    </div>
  )
}