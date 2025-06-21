import { Card, CardHeader, CardTitle } from "@/Components/ui/card"
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
  sets?: number;
  onSetsChange?: (sets: number) => void;
}

export default function ExerciseCard({ exercise, className, onDelete, sets, onSetsChange }: ExerciseCardProps) {
  // Get all muscle groups and individual muscles from all targets
  const allGroups = Array.from(new Set(
    exercise.targets.flatMap(target => target.groups)
  ));

  const allPrimaryMuscles = Array.from(new Set(
    exercise.targets.flatMap(target => target.primaryMuscles)
  ));

  const allSecondaryMuscles = Array.from(new Set(
    exercise.targets.flatMap(target => target.secondaryMuscles)
  ));

  const allTertiaryMuscles = Array.from(new Set(
    exercise.targets.flatMap(target => target.tertiaryMuscles)
  ));

  return (
    <Card className={cn("bg-card border-border relative p-4 rounded-lg shadow-md", className)}>
      <div className="flex justify-between items-start mb-2">
        <CardTitle className="text-sm font-semibold text-card-foreground flex-1 pr-10">{exercise.name}</CardTitle>
        <div className="absolute top-2 right-2 flex items-center gap-1">
          {onSetsChange && sets !== undefined && (
            <select
              value={sets}
              onChange={(e) => {
                e.stopPropagation();
                onSetsChange(parseInt(e.target.value, 10));
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background text-foreground border border-input rounded-md px-2 py-1 text-xs h-7 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map(i => (
                <option key={i} value={i}>{i} set{i > 1 ? 's' : ''}</option>
              ))}
            </select>
          )}
          {onDelete && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 p-0 hover:bg-destructive/90 hover:text-destructive-foreground"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs text-muted-foreground">{exercise.description}</p>
        <div className="flex flex-wrap gap-1">
          {/* Muscle Groups */}
          {allGroups.map((group) => (
            <Tooltip key={group}>
              <TooltipTrigger asChild>
                <Badge className="bg-emerald-300/20 text-emerald-300 border-emerald-300/40 hover:bg-emerald-300/30 cursor-default text-xs">
                  {group}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Muscle Group</TooltipContent>
            </Tooltip>
          ))}
          {/* Primary Muscles */}
          {allPrimaryMuscles.map((muscle) => (
            <Tooltip key={muscle}>
              <TooltipTrigger asChild>
                <Badge className="bg-sky-300/20 text-sky-300 border-sky-300/40 hover:bg-sky-300/30 cursor-default text-xs">
                  {muscle}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Primary Muscle</TooltipContent>
            </Tooltip>
          ))}
          {/* Secondary Muscles */}
          {allSecondaryMuscles.map((muscle) => (
            <Tooltip key={muscle}>
              <TooltipTrigger asChild>
                <Badge className="bg-blue-300/20 text-blue-300 border-blue-300/40 hover:bg-blue-300/30 cursor-default text-xs">
                  {muscle}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Secondary Muscle</TooltipContent>
            </Tooltip>
          ))}
          {/* Tertiary Muscles */}
          {allTertiaryMuscles.map((muscle) => (
            <Tooltip key={muscle}>
              <TooltipTrigger asChild>
                <Badge className="bg-indigo-300/20 text-indigo-300 border-indigo-300/40 hover:bg-indigo-300/30 cursor-default text-xs">
                  {muscle}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Tertiary Muscle</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </Card>
  )
}