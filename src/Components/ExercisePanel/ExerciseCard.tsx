import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/Components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Exercise } from "@/store/Exercises"
import { X } from "lucide-react"
import { Button } from "@/Components/ui/button"

interface ExerciseCardProps {
  exercise: Exercise;
  className?: string;
  onDelete?: () => void;
}

export default function ExerciseCard({ exercise, className, onDelete }: ExerciseCardProps) {
  return (
    <Card className={cn("bg-card border-border relative", className)}>
      <CardHeader className="text-center border-b border-border pb-4">
        {onDelete && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 left-2 h-6 w-6 p-0 hover:bg-destructive/90 hover:text-destructive-foreground"
            onClick={onDelete}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
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