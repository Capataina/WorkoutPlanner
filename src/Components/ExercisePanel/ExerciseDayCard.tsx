import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"

interface ExerciseDayCardProps {
  dayName: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ExerciseDayCard({ dayName, children, className }: ExerciseDayCardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">{dayName}</div>
        <div className="card-description">Drop exercises here</div>
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}