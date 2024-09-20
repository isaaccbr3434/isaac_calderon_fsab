import { Line } from "react-chartjs-2"; // If using Chart.js

import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, LineController } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, LineController);

const ProgressTracker = ({ workoutData }) => {
  const data = {
    labels: workoutData.map((workout) => workout.date),
    datasets: [
      {
        label: "Duration (min)",
        data: workoutData.map((workout) => workout.duration),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Progress Tracker</h2>
      <Line data={data} />
    </div>
  );
};

export default ProgressTracker;
