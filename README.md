The Interactive Workout Planner is a modern web application for planning weekly workouts in a mesocycle (multi-week training cycle). It helps ensure each muscle group hits a target volume (10–20 sets/week) and supports automatic progression (e.g., adding 1 set each subsequent week). You can:

- Drag and drop exercises into daily slots.
- View real-time muscle group set counts (including partial credit for secondary muscles).
- Plan progressive overload over a user-defined number of weeks.
- Create or customize exercises, swap exercises, and manage templates.

The UI is purposefully minimalistic, featuring a dark-themed design inspired by popular modern interfaces. Everything is built with React + TypeScript and leverages shadcn/ui and Tailwind CSS for consistent styling.


Tech Stack:
- React + TypeScript
- shadcn/ui (for components)
- Tailwind CSS (for styling)
- Vite (for bundling)
- Vercel (for deployment)
- Drag and Drop (dnd-kit)
- Zustand (for state management)


Current Features (Todo List)

[] Minimal Dark-Themed UI (A clean, dark interface inspired by apps like Linear, shadcn, Next.js, and Vercel.)

[] Weekly Workout Planner (Users can create a structured plan for each day of the week, placing exercises with a drag-and-drop system.)

[] Exercise Library Management (View all built-in exercises, each with defined primary and secondary muscles.)

[] Add custom exercises (Define name, primary/secondary muscles, equipment.)

[] Muscle Group Auto-Tracking (Automatic set counting for each muscle group. Partial set credit for secondary muscles.)

[] Mesocycle Progression (Define total mesocycle length (in weeks).)

[] Automatically increase sets each week for progressive overload.

[] Volume Management (Visual indicators of total sets per muscle group.)

[] Workout Templates (Save workout plans as templates for quick reuse. Load and modify saved templates.)

[] Exercise Swapping (Swap exercises that hit the same muscle group.)

[] Export Options (Export workout plan as PDF/PNG for printing or sharing. Export data as CSV for external analysis.)

