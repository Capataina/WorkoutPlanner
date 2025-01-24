import ExerciseDayCard from "./ExerciseDayCard"

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

export default function ExerciseDayTable() {
  return (
    <div className="exercise-day-table">
      {DAYS_OF_WEEK.map((day) => (
        <ExerciseDayCard key={day} dayName={day} />
      ))}
    </div>
  )
}