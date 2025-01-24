export type Exercise = {
    name: string;
    primaryMuscles: string[];
    secondaryMuscles: string[];
    tertiaryMuscles: string[];
    description: string;
  };
  
  const exercises: Record<string, Exercise> = {
    "Bench Press": {
      name: "Bench Press",
      primaryMuscles: ["Chest", "Triceps"],
      secondaryMuscles: ["Front Deltoids"],
      tertiaryMuscles: [],
      description: "A compound press that predominantly targets the chest and triceps, with shoulders also involved."
    },
    "Barbell Back Squat": {
      name: "Barbell Back Squat",
      primaryMuscles: ["Quadriceps", "Glutes"],
      secondaryMuscles: ["Lower Back", "Core"],
      tertiaryMuscles: [],
      description: "A key lower-body exercise focusing on quads and glutes, with the lower back and core stabilizing."
    },
    "Deadlift": {
      name: "Deadlift",
      primaryMuscles: ["Hamstrings", "Glutes"],
      secondaryMuscles: ["Lower Back"],
      tertiaryMuscles: ["Forearms", "Traps"],
      description: "A total-body pulling exercise emphasizing the posterior chain, demanding grip strength and trunk stability."
    },
    "Overhead Press": {
      name: "Overhead Press",
      primaryMuscles: ["Shoulders"],
      secondaryMuscles: ["Triceps"],
      tertiaryMuscles: ["Upper Chest"],
      description: "A standing press that develops shoulder strength, with triceps assisting and slight upper-chest involvement."
    },
    "Barbell Row": {
      name: "Barbell Row",
      primaryMuscles: ["Mid-Back", "Lats"],
      secondaryMuscles: ["Biceps"],
      tertiaryMuscles: ["Core"],
      description: "A bent-over rowing movement that strengthens the back and biceps, requiring core stability."
    },
    "Pull-Up": {
      name: "Pull-Up",
      primaryMuscles: ["Lats"],
      secondaryMuscles: ["Biceps", "Forearms"],
      tertiaryMuscles: ["Upper Back"],
      description: "Bodyweight vertical pull focusing on lats, with strong biceps and forearm involvement."
    },
    "Chin-Up": {
      name: "Chin-Up",
      primaryMuscles: ["Lats", "Biceps"],
      secondaryMuscles: ["Forearms"],
      tertiaryMuscles: ["Upper Back"],
      description: "Similar to pull-ups but with a supinated grip, emphasizing biceps while still hitting the lats and upper back."
    },
    "Dip": {
      name: "Dip",
      primaryMuscles: ["Triceps", "Chest"],
      secondaryMuscles: ["Front Deltoids"],
      tertiaryMuscles: [],
      description: "A compound bodyweight exercise primarily stressing triceps and chest, with shoulders stabilizing."
    },
    "Dumbbell Biceps Curl": {
      name: "Dumbbell Biceps Curl",
      primaryMuscles: ["Biceps"],
      secondaryMuscles: ["Forearms"],
      tertiaryMuscles: [],
      description: "An isolation exercise focusing on biceps, with forearms aiding in stabilization."
    },
    "Hammer Curl": {
      name: "Hammer Curl",
      primaryMuscles: ["Brachialis", "Biceps"],
      secondaryMuscles: ["Forearms"],
      tertiaryMuscles: [],
      description: "A curl variation stressing the brachialis and biceps, with forearms assisting in grip."
    },
    "Skullcrusher": {
      name: "Skullcrusher",
      primaryMuscles: ["Triceps"],
      secondaryMuscles: ["Forearms"],
      tertiaryMuscles: [],
      description: "An isolation move for triceps, often done with an EZ-bar or dumbbells, requiring good shoulder stability."
    },
    "Leg Press": {
      name: "Leg Press",
      primaryMuscles: ["Quadriceps"],
      secondaryMuscles: ["Glutes", "Hamstrings"],
      tertiaryMuscles: [],
      description: "A compound machine exercise emphasizing quads, with glutes and hamstrings assisting under load."
    },
    "Lunge": {
      name: "Lunge",
      primaryMuscles: ["Quadriceps", "Glutes"],
      secondaryMuscles: ["Hamstrings"],
      tertiaryMuscles: ["Core"],
      description: "A unilateral exercise targeting quads and glutes, engaging the core for balance."
    },
    "Bulgarian Split Squat": {
      name: "Bulgarian Split Squat",
      primaryMuscles: ["Quadriceps"],
      secondaryMuscles: ["Glutes"],
      tertiaryMuscles: ["Core", "Hamstrings"],
      description: "A single-leg squat variation focusing on the quads, improving balance, and heavily engaging glutes."
    },
    "Hip Thrust": {
      name: "Hip Thrust",
      primaryMuscles: ["Glutes"],
      secondaryMuscles: ["Hamstrings"],
      tertiaryMuscles: ["Core"],
      description: "A hip-extension movement that activates and strengthens the glutes while engaging hamstrings and core."
    },
    "Glute Bridge": {
      name: "Glute Bridge",
      primaryMuscles: ["Glutes"],
      secondaryMuscles: ["Hamstrings"],
      tertiaryMuscles: ["Core"],
      description: "A bodyweight or weighted exercise bridging the hips upward to target glutes, hamstrings, and core."
    },
    "Shoulder Press (Dumbbell)": {
      name: "Shoulder Press (Dumbbell)",
      primaryMuscles: ["Shoulders"],
      secondaryMuscles: ["Triceps"],
      tertiaryMuscles: ["Upper Chest"],
      description: "A free-weight press that hits the deltoids, with triceps and upper chest providing secondary support."
    },
    "Lateral Raise": {
      name: "Lateral Raise",
      primaryMuscles: ["Shoulders (Lateral Head)"],
      secondaryMuscles: ["Traps"],
      tertiaryMuscles: [],
      description: "An isolation exercise that targets the side (lateral) delts, with traps helping stabilize the movement."
    },
    "Face Pull": {
      name: "Face Pull",
      primaryMuscles: ["Rear Deltoids"],
      secondaryMuscles: ["Upper Back", "Traps"],
      tertiaryMuscles: [],
      description: "A pulling exercise from a cable or band, developing rear delts, upper back, and traps."
    },
    "Upright Row": {
      name: "Upright Row",
      primaryMuscles: ["Shoulders"],
      secondaryMuscles: ["Traps"],
      tertiaryMuscles: ["Biceps"],
      description: "An exercise that pulls the bar up along the torso, working the shoulders and traps with biceps assisting."
    },
    "Standing Calf Raise": {
      name: "Standing Calf Raise",
      primaryMuscles: ["Gastrocnemius"],
      secondaryMuscles: ["Soleus"],
      tertiaryMuscles: [],
      description: "A calf-building move typically performed with a machine or free weights, emphasizing the gastrocnemius."
    },
    "Seated Calf Raise": {
      name: "Seated Calf Raise",
      primaryMuscles: ["Soleus"],
      secondaryMuscles: ["Gastrocnemius"],
      tertiaryMuscles: [],
      description: "A seated variation that places more focus on the soleus, with assistance from the gastrocnemius."
    },
    "Cable Fly": {
      name: "Cable Fly",
      primaryMuscles: ["Chest"],
      secondaryMuscles: ["Front Deltoids"],
      tertiaryMuscles: ["Biceps"],
      description: "An isolation exercise using cables to maintain tension on the chest, with shoulders and biceps stabilizing."
    },
    "Incline Bench Press": {
      name: "Incline Bench Press",
      primaryMuscles: ["Upper Chest"],
      secondaryMuscles: ["Front Deltoids"],
      tertiaryMuscles: ["Triceps"],
      description: "A pressing variation angled to target the upper portion of the chest, with shoulders and triceps assisting."
    },
    "Decline Bench Press": {
      name: "Decline Bench Press",
      primaryMuscles: ["Lower Chest"],
      secondaryMuscles: ["Triceps"],
      tertiaryMuscles: ["Shoulders"],
      description: "A decline variation emphasizing the lower chest region, with triceps and shoulders also engaged."
    },
    "Close-Grip Bench Press": {
      name: "Close-Grip Bench Press",
      primaryMuscles: ["Triceps"],
      secondaryMuscles: ["Chest"],
      tertiaryMuscles: ["Front Deltoids"],
      description: "A narrower-grip bench press variation placing more load on triceps while still hitting the chest."
    },
    "EZ-Bar Curl": {
      name: "EZ-Bar Curl",
      primaryMuscles: ["Biceps"],
      secondaryMuscles: ["Forearms"],
      tertiaryMuscles: [],
      description: "A curl variation using an EZ-bar for wrist comfort, primarily hitting the biceps."
    },
    "Preacher Curl": {
      name: "Preacher Curl",
      primaryMuscles: ["Biceps"],
      secondaryMuscles: ["Forearms"],
      tertiaryMuscles: [],
      description: "An isolation exercise using a preacher bench to limit momentum and isolate the biceps."
    },
    "Reverse Curl": {
      name: "Reverse Curl",
      primaryMuscles: ["Forearms"],
      secondaryMuscles: ["Biceps"],
      tertiaryMuscles: [],
      description: "A pronated-grip curl highlighting forearms while still training the biceps."
    },
    "Overhead Tricep Extension": {
      name: "Overhead Tricep Extension",
      primaryMuscles: ["Triceps"],
      secondaryMuscles: ["Shoulders", "Forearms"],
      tertiaryMuscles: [],
      description: "A tricep builder that stretches and strengthens the muscle in the overhead position."
    },
    "Tricep Pushdown": {
      name: "Tricep Pushdown",
      primaryMuscles: ["Triceps"],
      secondaryMuscles: ["Forearms"],
      tertiaryMuscles: [],
      description: "A cable exercise targeting the triceps, with forearms contributing to grip stability."
    },
    "Bent Over Row": {
      name: "Bent Over Row",
      primaryMuscles: ["Lats", "Mid-Back"],
      secondaryMuscles: ["Biceps"],
      tertiaryMuscles: ["Core"],
      description: "A pulling exercise hitting the entire back region, with biceps and core assistance."
    },
    "T-Bar Row": {
      name: "T-Bar Row",
      primaryMuscles: ["Lats", "Mid-Back"],
      secondaryMuscles: ["Biceps"],
      tertiaryMuscles: ["Core"],
      description: "A supported row variation emphasizing the lats and mid-back, with core stability required."
    },
    "Seated Cable Row": {
      name: "Seated Cable Row",
      primaryMuscles: ["Lats", "Mid-Back"],
      secondaryMuscles: ["Biceps"],
      tertiaryMuscles: ["Forearms"],
      description: "A machine-based row working the back and biceps, with the forearms involved for grip."
    },
    "Lat Pulldown": {
      name: "Lat Pulldown",
      primaryMuscles: ["Lats"],
      secondaryMuscles: ["Biceps"],
      tertiaryMuscles: ["Forearms", "Upper Back"],
      description: "A machine-based vertical pull focusing on the lats, with biceps, forearms, and upper back assisting."
    },
    "Farmer's Walk": {
      name: "Farmer's Walk",
      primaryMuscles: ["Forearms", "Grip"],
      secondaryMuscles: ["Traps"],
      tertiaryMuscles: ["Core"],
      description: "A loaded carry that challenges grip strength, trap stability, and overall core resilience."
    },
    "Good Morning": {
      name: "Good Morning",
      primaryMuscles: ["Lower Back", "Hamstrings"],
      secondaryMuscles: ["Glutes"],
      tertiaryMuscles: [],
      description: "A hip-hinge exercise strengthening the lower back and hamstrings, requiring control and technique."
    },
    "Hyperextension": {
      name: "Hyperextension",
      primaryMuscles: ["Lower Back"],
      secondaryMuscles: ["Glutes", "Hamstrings"],
      tertiaryMuscles: [],
      description: "Often performed on a hyperextension bench to develop lower back strength and stability."
    },
    "Ab Crunch": {
      name: "Ab Crunch",
      primaryMuscles: ["Rectus Abdominis"],
      secondaryMuscles: ["Hip Flexors"],
      tertiaryMuscles: ["Obliques"],
      description: "A classic core exercise focusing on the frontal ab muscles, with hip flexors and obliques helping stabilize."
    },
    "Plank": {
      name: "Plank",
      primaryMuscles: ["Core"],
      secondaryMuscles: ["Shoulders"],
      tertiaryMuscles: ["Glutes"],
      description: "An isometric core hold that also tests shoulder and glute stability."
    },
    "Side Plank": {
      name: "Side Plank",
      primaryMuscles: ["Obliques"],
      secondaryMuscles: ["Shoulders"],
      tertiaryMuscles: ["Hips"],
      description: "An isometric hold emphasizing oblique and lateral trunk strength, with shoulder and hip stabilization."
    },
    "Bicycle Crunch": {
      name: "Bicycle Crunch",
      primaryMuscles: ["Rectus Abdominis", "Obliques"],
      secondaryMuscles: ["Hip Flexors"],
      tertiaryMuscles: [],
      description: "A twisting crunch variation emphasizing both the rectus abdominis and obliques in a dynamic movement."
    },
    "Hanging Leg Raise": {
      name: "Hanging Leg Raise",
      primaryMuscles: ["Abdominals"],
      secondaryMuscles: ["Hip Flexors"],
      tertiaryMuscles: ["Forearms"],
      description: "An advanced core exercise done by hanging from a bar and lifting the legs, demanding grip and core strength."
    }
  };
  
  export default exercises;
  