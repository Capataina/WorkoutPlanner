import { DndContext, DragEndEvent, DragOverlay } from "@dnd-kit/core";
import { useState } from "react";
import ExerciseDayTable from "./ExerciseDayTable";
import ExerciseSelectionTable from "./ExerciseSelectionTable";
import { exercises, Exercise } from "@/store/Exercises";
import ExerciseCard from "./ExerciseCard";
import { DayExercise } from "@/App";

type DayExercises = Record<string, DayExercise[]>;

const initialDays = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

interface ExercisePanelProps {
  dayExercises: DayExercises;
  setDayExercises: React.Dispatch<React.SetStateAction<DayExercises>>;
}

export default function ExercisePanel({ dayExercises, setDayExercises }: ExercisePanelProps) {
  const [days, setDays] = useState<string[]>(initialDays);
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);

  const handleDragStart = (event: DragEndEvent) => {
    const exerciseName = event.active.id as string;
    const exercise = exercises[exerciseName];
    if (exercise) {
      setActiveExercise(exercise);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    setActiveExercise(null);

    if (over && over.data.current?.accepts === 'exercise') {
      const dayName = over.id as string;
      const exerciseName = active.id as string;
      const exercise = exercises[exerciseName];

      if (exercise) {
        setDayExercises(prev => ({
          ...prev,
          [dayName]: [...(prev[dayName] || []), { exercise, sets: 1, id: crypto.randomUUID() }]
        }));
      }
    }
  };

  const handleAddDay = () => {
    const newDayName = `New Day ${days.length - 6}`;
    setDays(prev => [...prev, newDayName]);
  };

  const handleDeleteDay = (dayNameToDelete: string) => {
    setDays(prev => prev.filter(day => day !== dayNameToDelete));
    setDayExercises(prev => {
      const newExercises = { ...prev };
      delete newExercises[dayNameToDelete];
      return newExercises;
    });
  };

  const handleRenameDay = (oldName: string, newName: string) => {
    setDays(prev => prev.map(day => day === oldName ? newName : day));
    setDayExercises(prev => {
      if (prev[oldName]) {
        const newExercises = { ...prev };
        newExercises[newName] = newExercises[oldName];
        delete newExercises[oldName];
        return newExercises;
      }
      return prev;
    });
  };

  const handleDeleteExercise = (dayName: string, exerciseId: string) => {
    setDayExercises(prev => {
      const dayExs = prev[dayName] || [];
      const newExercises = dayExs.filter(ex => ex.id !== exerciseId);
      return {
        ...prev,
        [dayName]: newExercises
      };
    });
  };

  const handleSetCountChange = (dayName: string, exerciseId: string, sets: number) => {
    setDayExercises(prev => {
      const dayExs = prev[dayName] || [];
      const newExercises = dayExs.map(ex =>
        ex.id === exerciseId ? { ...ex, sets } : ex
      );
      return {
        ...prev,
        [dayName]: newExercises
      };
    });
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
          days={days}
          exercises={dayExercises}
          onDeleteExercise={handleDeleteExercise}
          onSwapExercises={handleSwapExercises}
          onAddDay={handleAddDay}
          onDeleteDay={handleDeleteDay}
          onRenameDay={handleRenameDay}
          onSetCountChange={handleSetCountChange}
        />
        <DragOverlay>
          {activeExercise && <ExerciseCard exercise={activeExercise} />}
        </DragOverlay>
      </div>
    </DndContext>
  );
}