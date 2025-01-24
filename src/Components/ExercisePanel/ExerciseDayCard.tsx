import { useDroppable } from "@dnd-kit/core";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { cn } from "@/lib/utils";
import { Exercise } from "@/store/Exercises";
import ExerciseCard from "./ExerciseCard";

interface ExerciseDayCardProps {
  dayName: string;
  exercises: Exercise[];
  className?: string;
  onDeleteExercise?: (dayName: string, index: number) => void;
  onSwapExercises?: (dayName: string, index1: number, index2: number) => void;
}

export default function ExerciseDayCard({ 
  dayName, 
  exercises = [], 
  className, 
  onDeleteExercise,
  onSwapExercises 
}: ExerciseDayCardProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `day-${dayName}`,
  });

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({
      dayName,
      index,
      type: 'exercise-swap'
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const card = target.closest('.exercise-card');
    if (card) {
      e.dataTransfer.dropEffect = 'move';
    }
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    
    if (data.type === 'exercise-swap' && data.dayName === dayName) {
      onSwapExercises?.(dayName, data.index, targetIndex);
    }
  };

  return (
    <Card 
      ref={setNodeRef} 
      className={cn(
        "exercise-day-card",
        isOver && "border-primary",
        className
      )}
    >
      <CardHeader className="text-center border-b pb-4">
        <CardTitle>{dayName}</CardTitle>
        <CardDescription>Drop exercises here</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {exercises.map((exercise, index) => (
          <div
            key={`${dayName}-${exercise.name}-${index}`}
            className="exercise-card"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <ExerciseCard
              exercise={exercise}
              onDelete={() => onDeleteExercise?.(dayName, index)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}