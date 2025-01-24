import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/Components/ui/tooltip"
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
            <Tooltip key={muscle}>
              <TooltipTrigger asChild>
                <Badge className="bg-indigo-300/90 hover:bg-indigo-400/90 cursor-default">
                  {muscle}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                Primary Muscle Group
              </TooltipContent>
            </Tooltip>
          ))}
          {exercise.secondaryMuscles.map((muscle) => (
            <Tooltip key={muscle}>
              <TooltipTrigger asChild>
                <Badge className="bg-teal-300/75 hover:bg-teal-400/75 cursor-default">
                  {muscle}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                Secondary Muscle Group
              </TooltipContent>
            </Tooltip>
          ))}
          {exercise.tertiaryMuscles.map((muscle) => (
            <Tooltip key={muscle}>
              <TooltipTrigger asChild>
                <Badge className="bg-amber-300/50 hover:bg-amber-400/50 cursor-default">
                  {muscle}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                Tertiary Muscle Group
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}