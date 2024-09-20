const WorkoutList = ({ workouts }) => {
    return (
      <div>
        <h2>My Workouts</h2>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>
              {workout.exercise} - {workout.duration} min
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WorkoutList;
  