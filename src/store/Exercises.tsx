type Exercise = {
    name: string;
    primaryMuscle: string;
    secondaryMuscle: string;
    tertiaryMuscle: string;
    description: string;
  };
  

  const exercises: Record<string, Exercise> = {
    "Bench Press": {
        name: "Bench Press",
        primaryMuscle: "Chest",
        secondaryMuscle: "Triceps",
        tertiaryMuscle: "Shoulders",
        description: "A chest exercise that targets the chest, triceps, and shoulders."
    }
  }

  export default exercises;
