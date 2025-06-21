export type MuscleGroup =
  | "Biceps"
  | "Triceps"
  | "Forearms"
  | "Delts"
  | "Chest"
  | "Lats"
  | "Rhomboids"
  | "Traps"
  | "Spinal Erectors"
  | "Teres"
  | "Glutes"
  | "Hamstrings"
  | "Quads"
  | "Adductors"
  | "Calves"
  | "Abs"
  | "Obliques";


export type Muscle =
  // Biceps
  | "Biceps Long Head"
  | "Biceps Short Head"

  // Triceps
  | "Triceps Long Head"
  | "Triceps Lateral Head"
  | "Triceps Medial Head"

  // Forearms
  | "Brachioradialis"
  | "Wrist Flexors"
  | "Wrist Extensors"

  // Delts
  | "Front Delts"
  | "Side Delts"
  | "Rear Delts"

  // Chest
  | "Chest Upper"
  | "Chest Mid"
  | "Chest Lower"

  // Lats
  | "Lats Upper"
  | "Lats Lower"

  // Rhomboids
  | "Rhomboids"

  // Traps
  | "Traps Upper"
  | "Traps Mid"
  | "Traps Lower"

  // Teres
  | "Teres Major"
  | "Teres Minor"

  // Spinal Erectors
  | "Spinal Erectors"

  // Glutes
  | "Glute Max"
  | "Glute Med"
  | "Glute Min"

  // Quads
  | "Vastus Lateralis"
  | "Vastus Medialis"
  | "Vastus Intermedius"
  | "Rectus Femoris"

  // Hamstrings
  | "Biceps Femoris"
  | "Semitendinosus"
  | "Semimembranosus"

  // Adductors
  | "Adductor Longus"
  | "Adductor Brevis"
  | "Adductor Magnus"
  | "Gracilis"
  | "Pectineus"

  // Calves
  | "Gastrocnemius"
  | "Soleus"

  // Abs
  | "Rectus Abdominis"
  | "Transverse Abdominis"

  // Obliques
  | "Internal Obliques"
  | "External Obliques";

export const MuscleToGroupMap: Record<Muscle, MuscleGroup> = {
  // Biceps
  "Biceps Long Head": "Biceps",
  "Biceps Short Head": "Biceps",

  // Triceps
  "Triceps Long Head": "Triceps",
  "Triceps Lateral Head": "Triceps",
  "Triceps Medial Head": "Triceps",

  // Forearms
  "Brachioradialis": "Forearms",
  "Wrist Flexors": "Forearms",
  "Wrist Extensors": "Forearms",

  // Delts
  "Front Delts": "Delts",
  "Side Delts": "Delts",
  "Rear Delts": "Delts",

  // Chest
  "Chest Upper": "Chest",
  "Chest Mid": "Chest",
  "Chest Lower": "Chest",

  // Lats
  "Lats Upper": "Lats",
  "Lats Lower": "Lats",

  // Rhomboids
  "Rhomboids": "Rhomboids",

  // Traps
  "Traps Upper": "Traps",
  "Traps Mid": "Traps",
  "Traps Lower": "Traps",

  // Teres
  "Teres Major": "Teres",
  "Teres Minor": "Teres",

  // Spinal Erectors
  "Spinal Erectors": "Spinal Erectors",

  // Glutes
  "Glute Max": "Glutes",
  "Glute Med": "Glutes",
  "Glute Min": "Glutes",

  // Quads
  "Vastus Lateralis": "Quads",
  "Vastus Medialis": "Quads",
  "Vastus Intermedius": "Quads",
  "Rectus Femoris": "Quads",

  // Hamstrings
  "Biceps Femoris": "Hamstrings",
  "Semitendinosus": "Hamstrings",
  "Semimembranosus": "Hamstrings",

  // Adductors
  "Adductor Longus": "Adductors",
  "Adductor Brevis": "Adductors",
  "Adductor Magnus": "Adductors",
  "Gracilis": "Adductors",
  "Pectineus": "Adductors",

  // Calves
  "Gastrocnemius": "Calves",
  "Soleus": "Calves",

  // Abs
  "Rectus Abdominis": "Abs",
  "Transverse Abdominis": "Abs",

  // Obliques
  "Internal Obliques": "Obliques",
  "External Obliques": "Obliques",
};


export type MuscleRegion = {
  groups: MuscleGroup[];            // e.g., ["Arms", "Back"]
  primaryMuscles: Muscle[];
  secondaryMuscles: Muscle[];
  tertiaryMuscles: Muscle[];
};

export interface Exercise {
  name: string;
  targets: MuscleRegion[];          // Allows grouping in multiple contexts
  description: string;
}

export interface DayExercise {
  id: string;
  exercise: Exercise;
  sets: number;
}

export const exercises: Record<string, Exercise> = {
  // ---------------------------------------------------------------------------
  "Bench Press": {
    name: "Bench Press",
    targets: [
      {
        groups: ["Chest", "Triceps", "Delts"],
        primaryMuscles: ["Chest Mid", "Chest Upper"],
        secondaryMuscles: [
          "Triceps Lateral Head",
          "Triceps Long Head",
          "Front Delts",
        ],
        tertiaryMuscles: [],
      },
    ],
    description:
      "A compound press that predominantly targets the chest and triceps, with shoulders also involved.",
  },
  // ---------------------------------------------------------------------------
  "Barbell Back Squat": {
    name: "Barbell Back Squat",
    targets: [
      {
        groups: ["Quads", "Glutes", "Hamstrings", "Spinal Erectors"],
        primaryMuscles: [
          "Vastus Lateralis",
          "Vastus Medialis",
          "Vastus Intermedius",
          "Rectus Femoris",
          "Glute Max",
        ],
        secondaryMuscles: [
          "Glute Med",
          "Biceps Femoris",
          "Semitendinosus",
        ],
        tertiaryMuscles: ["Semimembranosus", "Spinal Erectors"],
      },
    ],
    description:
      "A key lower‑body exercise focusing on quads and glutes, with the posterior chain stabilising the load.",
  },
  // ---------------------------------------------------------------------------
  "Deadlift": {
    name: "Deadlift",
    targets: [
      {
        groups: [
          "Hamstrings",
          "Glutes",
          "Spinal Erectors",
          "Traps",
          "Forearms",
        ],
        primaryMuscles: [
          "Biceps Femoris",
          "Semitendinosus",
          "Semimembranosus",
          "Glute Max",
          "Spinal Erectors",
        ],
        secondaryMuscles: ["Traps Mid", "Traps Upper"],
        tertiaryMuscles: [
          "Brachioradialis",
          "Wrist Flexors",
          "Wrist Extensors",
        ],
      },
    ],
    description:
      "A total‑body pull emphasising the posterior chain, grip strength, and trunk stability.",
  },
  // ---------------------------------------------------------------------------
  "Overhead Press": {
    name: "Overhead Press",
    targets: [
      {
        groups: ["Delts", "Triceps", "Chest"],
        primaryMuscles: ["Front Delts", "Side Delts"],
        secondaryMuscles: [
          "Triceps Long Head",
          "Triceps Lateral Head",
          "Triceps Medial Head",
          "Chest Upper",
        ],
        tertiaryMuscles: ["Traps Upper"],
      },
    ],
    description:
      "A standing press developing shoulder and triceps strength with minor upper‑chest assistance.",
  },
  // ---------------------------------------------------------------------------
  "Barbell Row": {
    name: "Barbell Row",
    targets: [
      {
        groups: [
          "Lats",
          "Rhomboids",
          "Traps",
          "Biceps",
          "Delts",
          "Spinal Erectors",
          "Abs",
        ],
        primaryMuscles: [
          "Lats Upper",
          "Lats Lower",
          "Rhomboids",
          "Traps Mid",
        ],
        secondaryMuscles: [
          "Biceps Long Head",
          "Biceps Short Head",
          "Rear Delts",
        ],
        tertiaryMuscles: [
          "Spinal Erectors",
          "Rectus Abdominis",
          "Internal Obliques",
          "External Obliques",
        ],
      },
    ],
    description:
      "A bent‑over row that strengthens the entire back and biceps while challenging core stability.",
  },
  // ---------------------------------------------------------------------------
  "Pull‑Up": {
    name: "Pull‑Up",
    targets: [
      {
        groups: [
          "Lats",
          "Biceps",
          "Forearms",
          "Traps",
          "Rhomboids",
          "Teres",
          "Delts",
        ],
        primaryMuscles: ["Lats Upper", "Lats Lower"],
        secondaryMuscles: [
          "Biceps Long Head",
          "Biceps Short Head",
          "Brachioradialis",
        ],
        tertiaryMuscles: [
          "Traps Lower",
          "Rhomboids",
          "Teres Major",
          "Teres Minor",
          "Rear Delts",
        ],
      },
    ],
    description:
      "A body‑weight vertical pull focusing on the lats with strong biceps and forearm involvement.",
  },
  // ---------------------------------------------------------------------------
  "Chin‑Up": {
    name: "Chin‑Up",
    targets: [
      {
        groups: [
          "Lats",
          "Biceps",
          "Forearms",
          "Traps",
          "Rhomboids",
        ],
        primaryMuscles: [
          "Lats Upper",
          "Lats Lower",
          "Biceps Long Head",
          "Biceps Short Head",
        ],
        secondaryMuscles: ["Brachioradialis", "Wrist Flexors"],
        tertiaryMuscles: ["Traps Lower", "Rhomboids"],
      },
    ],
    description:
      "A supinated‑grip pull‑up variant placing extra emphasis on the biceps while still loading the lats and upper back.",
  },
  // ---------------------------------------------------------------------------
  "Dip": {
    name: "Dip",
    targets: [
      {
        groups: ["Triceps", "Chest", "Delts"],
        primaryMuscles: [
          "Triceps Long Head",
          "Triceps Lateral Head",
          "Chest Lower",
        ],
        secondaryMuscles: [
          "Chest Mid",
          "Front Delts",
          "Triceps Medial Head",
        ],
        tertiaryMuscles: [],
      },
    ],
    description:
      "A compound body‑weight press primarily stressing triceps and lower chest with shoulder stabilisation.",
  },
  // ---------------------------------------------------------------------------
  "Dumbbell Biceps Curl": {
    name: "Dumbbell Biceps Curl",
    targets: [
      {
        groups: ["Biceps", "Forearms"],
        primaryMuscles: ["Biceps Long Head", "Biceps Short Head"],
        secondaryMuscles: ["Brachioradialis", "Wrist Flexors"],
        tertiaryMuscles: [],
      },
    ],
    description:
      "An isolation movement focusing on both heads of the biceps with forearm stabilisation.",
  },
  // ---------------------------------------------------------------------------
  "Hammer Curl": {
    name: "Hammer Curl",
    targets: [
      {
        groups: ["Biceps", "Forearms"],
        primaryMuscles: ["Brachioradialis", "Biceps Short Head", "Biceps Long Head"],
        secondaryMuscles: ["Wrist Extensors", "Wrist Flexors"],
        tertiaryMuscles: [],
      },
    ],
    description:
      "A neutral‑grip curl that stresses the brachioradialis and brachialis while still loading the biceps.",
  },
  // ---------------------------------------------------------------------------
  "Skullcrusher": {
    name: "Skullcrusher",
    targets: [
      {
        groups: ["Triceps", "Forearms"],
        primaryMuscles: [
          "Triceps Long Head",
          "Triceps Lateral Head",
          "Triceps Medial Head",
        ],
        secondaryMuscles: [
          "Brachioradialis",
          "Wrist Flexors",
          "Wrist Extensors",
        ],
        tertiaryMuscles: [],
      },
    ],
    description:
      "An isolation movement for the triceps performed with an EZ‑bar or dumbbells, requiring shoulder stability.",
  },
  // ---------------------------------------------------------------------------
  "Leg Press": {
    name: "Leg Press",
    targets: [
      {
        groups: ["Quads", "Glutes", "Hamstrings"],
        primaryMuscles: [
          "Vastus Lateralis",
          "Vastus Medialis",
          "Vastus Intermedius",
          "Rectus Femoris",
        ],
        secondaryMuscles: [
          "Glute Max",
          "Glute Med",
          "Biceps Femoris",
          "Semitendinosus",
        ],
        tertiaryMuscles: ["Semimembranosus", "Glute Min"],
      },
    ],
    description:
      "A compound machine press emphasising quadriceps development with glute and hamstring assistance.",
  },
  // ---------------------------------------------------------------------------
  "Lunge": {
    name: "Lunge",
    targets: [
      {
        groups: ["Quads", "Glutes", "Hamstrings", "Abs"],
        primaryMuscles: ["Vastus Lateralis", "Vastus Medialis", "Rectus Femoris", "Glute Max"],
        secondaryMuscles: ["Glute Med", "Biceps Femoris", "Semitendinosus"],
        tertiaryMuscles: [
          "Semimembranosus",
          "Rectus Abdominis",
          "Internal Obliques",
          "External Obliques",
        ],
      },
    ],
    description:
      "A unilateral squat‑pattern exercise targeting quads and glutes while demanding core balance and control.",
  },
  // ---------------------------------------------------------------------------
  "Bulgarian Split Squat": {
    name: "Bulgarian Split Squat",
    targets: [
      {
        groups: ["Quads", "Glutes", "Hamstrings", "Abs"],
        primaryMuscles: ["Vastus Lateralis", "Vastus Medialis", "Rectus Femoris"],
        secondaryMuscles: ["Glute Max", "Glute Med"],
        tertiaryMuscles: [
          "Biceps Femoris",
          "Semitendinosus",
          "Rectus Abdominis",
          "Internal Obliques",
        ],
      },
    ],
    description:
      "A single‑leg squat variation heavily taxing the quads and glutes while enhancing balance.",
  },
  // ---------------------------------------------------------------------------
  "Hip Thrust": {
    name: "Hip Thrust",
    targets: [
      {
        groups: ["Glutes", "Hamstrings", "Abs"],
        primaryMuscles: ["Glute Max", "Glute Med"],
        secondaryMuscles: ["Biceps Femoris", "Semitendinosus", "Semimembranosus"],
        tertiaryMuscles: ["Rectus Abdominis", "Spinal Erectors"],
      },
    ],
    description:
      "A hip‑extension movement that strongly activates the glutes while engaging hamstrings and core.",
  },
  // ---------------------------------------------------------------------------
  "Glute Bridge": {
    name: "Glute Bridge",
    targets: [
      {
        groups: ["Glutes", "Hamstrings", "Abs"],
        primaryMuscles: ["Glute Max", "Glute Med"],
        secondaryMuscles: ["Biceps Femoris", "Semitendinosus"],
        tertiaryMuscles: ["Rectus Abdominis", "Spinal Erectors"],
      },
    ],
    description:
      "A body‑weight or weighted bridge that targets the glutes and hamstrings with core stabilisation.",
  },
  // ---------------------------------------------------------------------------
  "Shoulder Press (Dumbbell)": {
    name: "Shoulder Press (Dumbbell)",
    targets: [
      {
        groups: ["Delts", "Triceps", "Chest"],
        primaryMuscles: ["Front Delts", "Side Delts"],
        secondaryMuscles: [
          "Triceps Long Head",
          "Triceps Lateral Head",
          "Triceps Medial Head",
          "Chest Upper",
        ],
        tertiaryMuscles: ["Traps Upper"],
      },
    ],
    description:
      "A free‑weight overhead press developing deltoid and triceps strength with minor upper‑chest involvement.",
  },
  // ---------------------------------------------------------------------------
  "Lateral Raise": {
    name: "Lateral Raise",
    targets: [
      {
        groups: ["Delts", "Traps"],
        primaryMuscles: ["Side Delts"],
        secondaryMuscles: ["Traps Upper"],
        tertiaryMuscles: [],
      },
    ],
    description:
      "An isolation movement focusing on the lateral deltoid fibres with supportive upper‑trap activation.",
  },
  // ---------------------------------------------------------------------------
  "Face Pull": {
    name: "Face Pull",
    targets: [
      {
        groups: ["Delts", "Rhomboids", "Traps"],
        primaryMuscles: ["Rear Delts"],
        secondaryMuscles: ["Rhomboids", "Traps Mid", "Traps Lower"],
        tertiaryMuscles: ["Side Delts"],
      },
    ],
    description:
      "A horizontal pull from cable or band that develops rear delts, mid‑traps, and scapular stability.",
  },
  // ---------------------------------------------------------------------------
  "Upright Row": {
    name: "Upright Row",
    targets: [
      {
        groups: ["Delts", "Traps", "Biceps"],
        primaryMuscles: ["Side Delts", "Traps Upper"],
        secondaryMuscles: [
          "Front Delts",
          "Biceps Long Head",
          "Biceps Short Head",
        ],
        tertiaryMuscles: ["Traps Mid"],
      },
    ],
    description:
      "A vertical pulling motion that raises the bar along the torso, loading the delts and upper traps with biceps assistance.",
  },
  // ---------------------------------------------------------------------------
  "Standing Calf Raise": {
    name: "Standing Calf Raise",
    targets: [
      {
        groups: ["Calves"],
        primaryMuscles: ["Gastrocnemius"],
        secondaryMuscles: ["Soleus"],
        tertiaryMuscles: [],
      },
    ],
    description:
      "A standing calf‑build movement primarily targeting the gastrocnemius with soleus assistance.",
  },
  // ---------------------------------------------------------------------------
  "Seated Calf Raise": {
    name: "Seated Calf Raise",
    targets: [
      {
        groups: ["Calves"],
        primaryMuscles: ["Soleus"],
        secondaryMuscles: ["Gastrocnemius"],
        tertiaryMuscles: [],
      },
    ],
    description:
      "A seated variation that shifts emphasis toward the soleus muscle while still recruiting the gastrocnemius.",
  },
  // ---------------------------------------------------------------------------
  "Cable Fly": {
    name: "Cable Fly",
    targets: [
      {
        groups: ["Chest", "Delts", "Biceps"],
        primaryMuscles: ["Chest Mid", "Chest Upper"],
        secondaryMuscles: ["Chest Lower", "Front Delts"],
        tertiaryMuscles: ["Biceps Short Head"],
      },
    ],
    description:
      "An isolation exercise using cables to maintain constant tension on the chest with shoulder and biceps stabilisation.",
  },
  // ---------------------------------------------------------------------------
  "Incline Bench Press": {
    name: "Incline Bench Press",
    targets: [
      {
        groups: ["Chest", "Delts", "Triceps"],
        primaryMuscles: ["Chest Upper"],
        secondaryMuscles: [
          "Chest Mid",
          "Front Delts",
          "Triceps Long Head",
          "Triceps Lateral Head",
        ],
        tertiaryMuscles: ["Triceps Medial Head"],
      },
    ],
    description:
      "A pressing variation angled to target the upper chest with supporting shoulder and triceps involvement.",
  },
  // ---------------------------------------------------------------------------
  "Decline Bench Press": {
    name: "Decline Bench Press",
    targets: [
      {
        groups: ["Chest", "Triceps", "Delts"],
        primaryMuscles: ["Chest Lower"],
        secondaryMuscles: [
          "Chest Mid",
          "Triceps Long Head",
          "Triceps Lateral Head",
        ],
        tertiaryMuscles: ["Front Delts", "Triceps Medial Head"],
      },
    ],
    description:
      "A decline variation emphasising the lower pectoral fibres with triceps and shoulder assistance.",
  },
  // ---------------------------------------------------------------------------
  "Close‑Grip Bench Press": {
    name: "Close‑Grip Bench Press",
    targets: [
      {
        groups: ["Triceps", "Chest", "Delts"],
        primaryMuscles: ["Triceps Long Head", "Triceps Lateral Head"],
        secondaryMuscles: ["Chest Mid", "Chest Upper"],
        tertiaryMuscles: ["Front Delts", "Triceps Medial Head"],
      },
    ],
    description:
      "A narrow‑grip press loading the triceps more heavily while still stimulating the chest.",
  },
  // ---------------------------------------------------------------------------
  "EZ‑Bar Curl": {
    name: "EZ‑Bar Curl",
    targets: [
      {
        groups: ["Biceps", "Forearms"],
        primaryMuscles: ["Biceps Long Head", "Biceps Short Head"],
        secondaryMuscles: ["Brachioradialis"],
        tertiaryMuscles: [],
      },
    ],
    description:
      "A curl using an EZ‑bar for wrist comfort, placing maximal tension on the biceps.",
  },
  // ---------------------------------------------------------------------------
  "Preacher Curl": {
    name: "Preacher Curl",
    targets: [
      {
        groups: ["Biceps", "Forearms"],
        primaryMuscles: ["Biceps Long Head", "Biceps Short Head"],
        secondaryMuscles: ["Brachioradialis"],
        tertiaryMuscles: [],
      },
    ],
    description:
      "An isolation curl on a preacher bench to eliminate momentum and fully isolate the biceps.",
  },
  // ---------------------------------------------------------------------------
  "Reverse Curl": {
    name: "Reverse Curl",
    targets: [
      {
        groups: ["Forearms", "Biceps"],
        primaryMuscles: ["Brachioradialis", "Wrist Extensors"],
        secondaryMuscles: ["Biceps Short Head", "Biceps Long Head"],
        tertiaryMuscles: [],
      },
    ],
    description:
      "A pronated‑grip curl emphasising the brachioradialis and wrist extensors while still training the biceps.",
  },
  // ---------------------------------------------------------------------------
  "Overhead Tricep Extension": {
    name: "Overhead Tricep Extension",
    targets: [
      {
        groups: ["Triceps", "Forearms"],
        primaryMuscles: ["Triceps Long Head"],
        secondaryMuscles: ["Triceps Medial Head", "Triceps Lateral Head"],
        tertiaryMuscles: ["Brachioradialis", "Wrist Flexors"],
      },
    ],
    description:
      "A tricep builder that stretches and strengthens the long head in an overhead position.",
  },
  // ---------------------------------------------------------------------------
  "Tricep Pushdown": {
    name: "Tricep Pushdown",
    targets: [
      {
        groups: ["Triceps", "Forearms"],
        primaryMuscles: ["Triceps Lateral Head"],
        secondaryMuscles: ["Triceps Long Head", "Triceps Medial Head"],
        tertiaryMuscles: ["Wrist Flexors"],
      },
    ],
    description:
      "A cable extension focused on the lateral triceps head with assistance from the other heads and forearms.",
  },
  // ---------------------------------------------------------------------------
  "Bent Over Row": {
    name: "Bent Over Row",
    targets: [
      {
        groups: [
          "Lats",
          "Rhomboids",
          "Traps",
          "Biceps",
          "Delts",
          "Spinal Erectors",
          "Abs",
        ],
        primaryMuscles: [
          "Lats Upper",
          "Lats Lower",
          "Rhomboids",
          "Traps Mid",
        ],
        secondaryMuscles: [
          "Biceps Long Head",
          "Biceps Short Head",
          "Rear Delts",
        ],
        tertiaryMuscles: [
          "Spinal Erectors",
          "Rectus Abdominis",
          "Internal Obliques",
        ],
      },
    ],
    description:
      "A hip‑hinged row targeting the full back with biceps and core co‑activation.",
  },
  // ---------------------------------------------------------------------------
  "T‑Bar Row": {
    name: "T‑Bar Row",
    targets: [
      {
        groups: [
          "Lats",
          "Rhomboids",
          "Traps",
          "Biceps",
          "Spinal Erectors",
        ],
        primaryMuscles: ["Lats Upper", "Lats Lower", "Traps Mid"],
        secondaryMuscles: ["Biceps Long Head", "Biceps Short Head", "Rhomboids"],
        tertiaryMuscles: ["Spinal Erectors"],
      },
    ],
    description:
      "A supported row variation emphasising lats and mid‑back with core stability provided by the bench.",
  },
  // ---------------------------------------------------------------------------
  "Seated Cable Row": {
    name: "Seated Cable Row",
    targets: [
      {
        groups: ["Lats", "Rhomboids", "Traps", "Biceps", "Forearms"],
        primaryMuscles: ["Lats Lower", "Rhomboids"],
        secondaryMuscles: ["Biceps Long Head", "Biceps Short Head"],
        tertiaryMuscles: ["Brachioradialis", "Traps Mid"],
      },
    ],
    description:
      "A machine‑based row developing thickness of the back with notable biceps and forearm engagement.",
  },
  // ---------------------------------------------------------------------------
  "Lat Pulldown": {
    name: "Lat Pulldown",
    targets: [
      {
        groups: ["Lats", "Biceps", "Forearms", "Traps", "Rhomboids"],
        primaryMuscles: ["Lats Upper", "Lats Lower"],
        secondaryMuscles: ["Biceps Long Head", "Biceps Short Head"],
        tertiaryMuscles: [
          "Brachioradialis",
          "Traps Lower",
          "Rhomboids",
        ],
      },
    ],
    description:
      "A machine vertical pull focusing on lat width with synergistic biceps, forearm, and upper‑back activation.",
  },
  // ---------------------------------------------------------------------------
  "Farmer's Walk": {
    name: "Farmer's Walk",
    targets: [
      {
        groups: ["Forearms", "Traps", "Abs", "Glutes", "Spinal Erectors"],
        primaryMuscles: [
          "Brachioradialis",
          "Wrist Flexors",
          "Wrist Extensors",
        ],
        secondaryMuscles: [
          "Traps Upper",
          "Traps Mid",
          "Rectus Abdominis",
          "Spinal Erectors",
        ],
        tertiaryMuscles: ["Glute Med"],
      },
    ],
    description:
      "A loaded carry challenging grip, shoulder girdle stability, core endurance, and overall postural strength.",
  },
  // ---------------------------------------------------------------------------
  "Good Morning": {
    name: "Good Morning",
    targets: [
      {
        groups: ["Spinal Erectors", "Hamstrings", "Glutes", "Abs"],
        primaryMuscles: ["Spinal Erectors", "Biceps Femoris", "Semitendinosus", "Semimembranosus"],
        secondaryMuscles: ["Glute Max", "Glute Med"],
        tertiaryMuscles: ["Rectus Abdominis", "Traps Mid"],
      },
    ],
    description:
      "A hip‑hinge exercise reinforcing lower‑back and hamstring strength while demanding trunk control.",
  },
  // ---------------------------------------------------------------------------
  "Hyperextension": {
    name: "Hyperextension",
    targets: [
      {
        groups: ["Spinal Erectors", "Glutes", "Hamstrings"],
        primaryMuscles: ["Spinal Erectors"],
        secondaryMuscles: ["Glute Max", "Biceps Femoris", "Semitendinosus"],
        tertiaryMuscles: ["Semimembranosus"],
      },
    ],
    description:
      "A back‑extension movement to develop lumbar strength and endurance with glute‑ham assistance.",
  },
  // ---------------------------------------------------------------------------
  "Ab Crunch": {
    name: "Ab Crunch",
    targets: [
      {
        groups: ["Abs", "Obliques"],
        primaryMuscles: ["Rectus Abdominis"],
        secondaryMuscles: ["Internal Obliques", "External Obliques"],
        tertiaryMuscles: ["Transverse Abdominis"],
      },
    ],
    description:
      "A classic spinal‑flexion exercise concentrating on the rectus abdominis with oblique stabilisation.",
  },
  // ---------------------------------------------------------------------------
  "Plank": {
    name: "Plank",
    targets: [
      {
        groups: ["Abs", "Delts", "Glutes", "Spinal Erectors"],
        primaryMuscles: ["Rectus Abdominis", "Transverse Abdominis"],
        secondaryMuscles: [
          "Internal Obliques",
          "External Obliques",
          "Front Delts",
          "Glute Max",
        ],
        tertiaryMuscles: ["Spinal Erectors", "Glute Med"],
      },
    ],
    description:
      "An isometric core hold that develops trunk stiffness while loading shoulders and glutes.",
  },
  // ---------------------------------------------------------------------------
  "Side Plank": {
    name: "Side Plank",
    targets: [
      {
        groups: ["Obliques", "Abs", "Delts", "Glutes"],
        primaryMuscles: ["Internal Obliques", "External Obliques"],
        secondaryMuscles: [
          "Rectus Abdominis",
          "Transverse Abdominis",
          "Glute Med",
        ],
        tertiaryMuscles: ["Front Delts", "Glute Max"],
      },
    ],
    description:
      "An isometric hold emphasising lateral trunk strength with shoulder and hip stabilisation.",
  },
  // ---------------------------------------------------------------------------
  "Bicycle Crunch": {
    name: "Bicycle Crunch",
    targets: [
      {
        groups: ["Abs", "Obliques"],
        primaryMuscles: ["Rectus Abdominis", "External Obliques"],
        secondaryMuscles: ["Internal Obliques", "Transverse Abdominis"],
        tertiaryMuscles: [],
      },
    ],
    description:
      "A dynamic twist‑and‑crunch pattern engaging both the rectus abdominis and obliques.",
  },
  // ---------------------------------------------------------------------------
  "Hanging Leg Raise": {
    name: "Hanging Leg Raise",
    targets: [
      {
        groups: ["Abs", "Forearms", "Lats"],
        primaryMuscles: ["Rectus Abdominis", "Transverse Abdominis"],
        secondaryMuscles: ["Brachioradialis", "Wrist Flexors", "Lats Upper"],
        tertiaryMuscles: ["Internal Obliques", "External Obliques"],
      },
    ],
    description:
      "An advanced core exercise performed hanging from a bar, demanding grip strength and trunk control.",
  },
};

export default exercises;
