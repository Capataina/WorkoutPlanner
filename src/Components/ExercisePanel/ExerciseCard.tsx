import { Card, CardHeader, CardTitle } from "@/Components/ui/card"
import { cn } from "@/lib/utils"

interface ExerciseCardProps {
  name: string;
  className?: string;
}

export default function ExerciseCard({ name, className }: ExerciseCardProps) {
  return (
    <Card className={cn("bg-muted", className)}>
      <CardHeader>
        <CardTitle className="text-sm">{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}