import { DndContext, DragEndEvent, DragOverlay } from "@dnd-kit/core";
import { useState } from "react";
import ExerciseDayTable from "./ExerciseDayTable";
import ExerciseSelectionTable from "./ExerciseSelectionTable";
import { Exercise } from "@/store/Exercises";
import ExerciseCard from "./ExerciseCard";

type DayExercises = Record<string, Exercise[]>;

export default function ExercisePanel() {
  const [dayExercises, setDayExercises] = useState<DayExercises>({});
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);

  const handleDragStart = (event: any) => {
    if (event.active.data.current) {
      setActiveExercise(event.active.data.current.exercise);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    setActiveExercise(null);
    
    if (!over || !active.data.current) return;
    
    const exercise = active.data.current.exercise as Exercise;
    const dayId = over.id as string;
    
    if (dayId.startsWith('day-')) {
      const day = dayId.replace('day-', '');
      setDayExercises(prev => ({
        ...prev,
        [day]: [...(prev[day] || []), exercise]
      }));
    }
  };

  const handleDeleteExercise = (dayName: string, index: number) => {
    setDayExercises(prev => ({
      ...prev,
      [dayName]: prev[dayName].filter((_, i) => i !== index)
    }));
  };

  const handleSwapExercises = (dayName: string, index1: number, index2: number) => {
    setDayExercises(prev => {
      const newExercises = [...(prev[dayName] || [])];
      [newExercises[index1], newExercises[index2]] = [newExercises[index2], newExercises[index1]];
      return {
        ...prev,
        [dayName]: newExercises
      };
    });
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="exercise-panel">
        <ExerciseSelectionTable />
        <ExerciseDayTable 
          exercises={dayExercises} 
          onDeleteExercise={handleDeleteExercise}
          onSwapExercises={handleSwapExercises}
        />
        <DragOverlay>
          {activeExercise && <ExerciseCard exercise={activeExercise} />}
        </DragOverlay>
      </div>
    </DndContext>
  );
}