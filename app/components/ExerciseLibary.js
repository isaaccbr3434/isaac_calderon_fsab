const exercises = [
    { name: "Push-Up", description: "A basic exercise for upper body strength." },
    { name: "Squat", description: "Great for leg strength." },
    {name: "Pull-Up", description: "Great for developing back strength"},
    // Add more exercises
  ];
  
  const ExerciseLibrary = () => {
    return (
      <div>
        <h2>Exercise Library</h2>
        <ul>
          {exercises.map((exercise, index) => (
            <li key={index}>
              <strong>{exercise.name}</strong>: {exercise.description}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ExerciseLibrary;
  