import { useState } from "react";
import exercises, { MuscleGroup } from "@/store/Exercises";
import DraggableExerciseCard from "./DraggableExerciseCard";
import { Badge } from "@/Components/ui/badge";

// Get unique muscle groups from all exercises
const allMuscleGroups = Array.from(new Set(
    Object.values(exercises).flatMap(exercise =>
        exercise.targets.flatMap(target => target.groups)
    )
)).sort();

export default function ExerciseSelectionTable() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedMuscles, setSelectedMuscles] = useState<MuscleGroup[]>([]);

    const toggleMuscle = (muscle: MuscleGroup) => {
        setSelectedMuscles(prev =>
            prev.includes(muscle)
                ? prev.filter(m => m !== muscle)
                : [...prev, muscle]
        );
    };

    const filteredExercises = Object.values(exercises).filter((exercise) => {
        // Filter by search query
        const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase());

        // Filter by selected muscle groups
        const matchesMuscles = selectedMuscles.length === 0 || selectedMuscles.some(muscleGroup =>
            exercise.targets.some(target => target.groups.includes(muscleGroup))
        );

        return matchesSearch && matchesMuscles;
    });

    return (
        <div className="exercise-selection-table">
            <div className="m-4 text-center">
                <h2 className="text-lg font-semibold mb-2">Exercise Table</h2>
                <p className="text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                    Drag and drop exercises under the days
                </p>
                <input
                    type="text"
                    placeholder="Search exercises..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 mb-4 bg-secondary text-foreground rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="flex flex-wrap gap-2 justify-center">
                    {allMuscleGroups.map((muscle) => (
                        <Badge
                            key={muscle}
                            className={`cursor-pointer ${selectedMuscles.includes(muscle)
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-zinc-300 hover:text-primary-foreground"
                                }`}
                            onClick={() => toggleMuscle(muscle)}
                        >
                            {muscle}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="p-4 space-y-4">
                {filteredExercises.map((exercise) => (
                    <DraggableExerciseCard
                        key={exercise.name}
                        exercise={exercise}
                    />
                ))}
            </div>
        </div>
    );
}