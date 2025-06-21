import { Exercise, Muscle, MuscleGroup, MuscleToGroupMap } from "@/store/Exercises";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { DayExercise } from "@/App";

interface WeeklyMusclePanelProps {
    dayExercises: Record<string, DayExercise[]>;
}

type MuscleData = {
    total: number;
    muscles: Record<Muscle, number>;
};

type WeeklyMuscleTotals = Partial<Record<MuscleGroup, MuscleData>>;

export default function WeeklyMusclePanel({ dayExercises }: WeeklyMusclePanelProps) {
    const calculateMuscleTotals = (): WeeklyMuscleTotals => {
        const totals: WeeklyMuscleTotals = {};

        const ensureGroupExists = (group: MuscleGroup) => {
            if (!totals[group]) {
                totals[group] = { total: 0, muscles: {} as Record<Muscle, number> };
            }
        };

        const addMuscleValue = (muscle: Muscle, value: number) => {
            const group = MuscleToGroupMap[muscle];
            if (!group) return;
            ensureGroupExists(group);

            if (!totals[group]!.muscles[muscle]) {
                totals[group]!.muscles[muscle] = 0;
            }
            totals[group]!.muscles[muscle] += value;
        };

        Object.values(dayExercises)
            .flat()
            .forEach(dayExercise => {
                const sets = dayExercise.sets;
                dayExercise.exercise.targets.forEach(target => {
                    // Increment total for each muscle group listed in the exercise
                    target.groups.forEach(groupName => {
                        ensureGroupExists(groupName);
                        totals[groupName]!.total += sets;
                    });

                    // Calculate individual muscle values separately
                    target.primaryMuscles.forEach(muscle => addMuscleValue(muscle, 1 * sets));
                    target.secondaryMuscles.forEach(muscle => addMuscleValue(muscle, 0.5 * sets));
                    target.tertiaryMuscles.forEach(muscle => addMuscleValue(muscle, 0.25 * sets));
                });
            });

        return totals;
    };

    const muscleTotals = calculateMuscleTotals();

    const sortedMuscleGroups = Object.entries(muscleTotals)
        .filter((entry): entry is [MuscleGroup, MuscleData] => entry[1] !== undefined)
        .sort(([, a], [, b]) => b.total - a.total);

    return (
        <div className="weekly-muscle-panel p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Weekly Muscle Group Volume</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {sortedMuscleGroups.map(([groupName, groupData]) => {
                    const sortedMuscles = Object.entries(groupData.muscles)
                        .sort(([, a], [, b]) => b - a);

                    return (
                        <Card key={groupName}>
                            <CardHeader>
                                <CardTitle className="text-lg">{groupName}</CardTitle>
                                <CardDescription>{groupData.total.toFixed(2)} total sets</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                {sortedMuscles.map(([muscleName, total]) => (
                                    <div key={muscleName} className="flex justify-between items-center">
                                        <span className="text-muted-foreground">{muscleName}</span>
                                        <span className="font-semibold text-primary">{total.toFixed(2)}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
            {sortedMuscleGroups.length === 0 && (
                <div className="text-center text-muted-foreground py-8">
                    No exercises added yet. Add exercises to see muscle group volume.
                </div>
            )}
        </div>
    );
}