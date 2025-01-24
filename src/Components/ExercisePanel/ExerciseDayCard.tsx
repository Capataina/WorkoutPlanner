import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import exercises from "@/store/Exercises";
import ExerciseCard from "./ExerciseCard";
import { cn } from "@/lib/utils";

interface ExerciseDayCardProps {
  dayName: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ExerciseDayCard({ dayName, children, className }: ExerciseDayCardProps) {
  return (
    <Card className={cn("bg-card border-border", className)}>
      <CardHeader className="text-center border-b border-border pb-4">
        <CardTitle className="text-lg text-card-foreground">{dayName}</CardTitle>
        <CardDescription className="text-muted-foreground">Drop exercises here</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 pt-4">
        <ExerciseCard exercise={exercises["Bench Press"]} />
        <ExerciseCard exercise={exercises["Barbell Row"]} />
        {children}
      </CardContent>
    </Card>
  )
}