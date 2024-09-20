"use client";

import { useState } from "react";
import Auth from "../app/components/Auth";
import WorkoutForm from "../app/components/WorkoutForm";
import WorkoutHistory from "../app/components/WorkoutHistory";
import Goals from "../app/components/Goals";
import ExerciseLibrary from "../app/components/ExerciseLibary";
import ProgressTracker from "../app/components/ProgressTracker";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleAddWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  const handleAddGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  return (
    <div>
      <h1>Workout Tracker</h1>
      {!isAuthenticated ? (
        <Auth onAuthChange={() => setIsAuthenticated(true)} />
      ) : (
        <>
          <WorkoutForm onAddWorkout={handleAddWorkout} />
          <WorkoutHistory workouts={workouts} />
          <Goals goals={goals} onAddGoal={handleAddGoal} />
          <ExerciseLibrary />
          <ProgressTracker workoutData={workouts} />
        </>
      )}
    </div>
  );
}

