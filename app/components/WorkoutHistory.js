const WorkoutHistory = ({ workouts, onEdit, onDelete }) => {
    return (
      <div>
        <h2>Workout History</h2>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>
              {workout.exercise} - {workout.duration} min
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WorkoutHistory;
  