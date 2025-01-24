import ExerciseDayTable from "./ExerciseDayTable";
import ExerciseSelectionTable from "./ExerciseSelectionTable";

export default function ExercisePanel() {
    return (
    <div className="exercise-panel">
        <ExerciseSelectionTable />
        <ExerciseDayTable />
    </div>
    )
}