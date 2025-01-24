import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"
import { cn } from "@/lib/utils"
import { Exercise } from "@/store/Exercises"

interface ExerciseCardProps {
  exercise: Exercise;
  className?: string;
}

export default function ExerciseCard({ exercise, className }: ExerciseCardProps) {
  return (
    <Card className={cn("bg-card border-border", className)}>
      <CardHeader className="text-center border-b border-border pb-4">
        <CardTitle className="text-sm text-card-foreground">{exercise.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 pt-4">
        <p className="text-sm text-muted-foreground">{exercise.description}</p>
        <div className="flex flex-wrap gap-2">
          {exercise.primaryMuscles.map((muscle) => (
            <Badge key={muscle} variant="default" className="bg-blue-500/90 hover:bg-blue-600">
              {muscle}
            </Badge>
          ))}
          {exercise.secondaryMuscles.map((muscle) => (
            <Badge key={muscle} variant="default" className="bg-green-500/70 hover:bg-green-600/70">
              {muscle}
            </Badge>
          ))}
          {exercise.tertiaryMuscles.map((muscle) => (
            <Badge key={muscle} variant="default" className="bg-red-500/50 hover:bg-red-600/50">
              {muscle}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}