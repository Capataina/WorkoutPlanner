import { useDraggable } from "@dnd-kit/core";
import ExerciseCard from "./ExerciseCard";
import { Exercise } from "@/store/Exercises";
import { cn } from "@/lib/utils";

interface DraggableExerciseCardProps {
  exercise: Exercise;
}

export default function DraggableExerciseCard({ exercise }: DraggableExerciseCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: exercise.name,
    data: {
      exercise,
      type: 'exercise'
    }
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={cn(
        "cursor-grab active:cursor-grabbing",
        isDragging && "opacity-50"
      )}
    >
      <ExerciseCard exercise={exercise} />
    </div>
  );
} 