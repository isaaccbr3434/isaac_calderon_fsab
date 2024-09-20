import { useState } from "react";

const Goals = ({ goals, onAddGoal }) => {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal) {
      onAddGoal(goal);
      setGoal("");
    }
  };

  return (
    <div>
      <h2>Set Your Goals</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">Add Goal</button>
      </form>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
