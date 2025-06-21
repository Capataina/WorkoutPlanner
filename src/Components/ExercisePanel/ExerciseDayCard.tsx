import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/Components/ui/card"
import ExerciseCard from "./ExerciseCard";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { DayExercise } from "@/App";

interface ExerciseDayCardProps {
  dayName: string;
  exercises: DayExercise[];
  className?: string;
  onDeleteExercise: (dayName: string, exerciseId: string) => void;
  onSwapExercises: (dayName: string, index1: number, index2: number) => void;
  onDeleteDay: () => void;
  onRenameDay: (newName: string) => void;
  onSetCountChange: (dayName: string, exerciseId: string, sets: number) => void;
}

export default function ExerciseDayCard({
  dayName,
  exercises = [],
  className,
  onDeleteExercise,
  onSwapExercises,
  onDeleteDay,
  onRenameDay,
  onSetCountChange,
}: ExerciseDayCardProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: dayName,
    data: {
      accepts: 'exercise'
    }
  });

  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [newDayName, setNewDayName] = useState(dayName);
  const [isEditing, setIsEditing] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDragIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    if (dragIndex !== null) {
      onSwapExercises(dayName, dragIndex, dropIndex);
      setDragIndex(null);
    }
  };

  const handleRename = () => {
    if (newDayName.trim()) {
      onRenameDay(newDayName.trim());
    }
    setIsEditing(false);
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
      <CardHeader className="text-center border-b pb-4 relative">
        {isEditing ? (
          <input
            type="text"
            value={newDayName}
            onChange={(e) => setNewDayName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => e.key === 'Enter' && handleRename()}
            autoFocus
            className="bg-transparent text-center text-lg font-semibold w-full"
          />
        ) : (
          <CardTitle onClick={() => setIsEditing(true)} className="cursor-pointer">
            {dayName}
          </CardTitle>
        )}
        <CardDescription>Drop exercises here</CardDescription>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={onDeleteDay}
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        {exercises.map((dayExercise, index) => (
          <div
            key={dayExercise.id}
            className="exercise-card"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <ExerciseCard
              exercise={dayExercise.exercise}
              onDelete={() => onDeleteExercise(dayName, dayExercise.id)}
              sets={dayExercise.sets}
              onSetsChange={(sets) => onSetCountChange(dayName, dayExercise.id, sets)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}