import './App.css'
import OverviewTopBar from './Components/OverviewTopBar/OverviewTopBar'
import WeeklyMusclePanel from './Components/WeeklyMusclePanel/WeeklyMusclePanel'
import ExercisePanel from './Components/ExercisePanel/ExercisePanel'
import { TooltipProvider } from '@/Components/ui/tooltip'

function App() {
  return (
    <TooltipProvider>
      <div className="dark">
        <OverviewTopBar />
        <ExercisePanel />
        <WeeklyMusclePanel />
      </div>
    </TooltipProvider>
  )
}

export default App
