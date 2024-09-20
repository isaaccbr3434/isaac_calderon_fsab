"use client";


import { useState } from "react";

const WorkoutForm = ({ onAddWorkout }) => {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !duration) return;
    onAddWorkout({ exercise, duration });
    setExercise("");
    setDuration("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise Type"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (min)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
