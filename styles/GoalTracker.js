import { useState } from 'react';

const GoalTracker = ({ goals, updateProgress }) => {
  const [trackedGoals, setTrackedGoals] = useState(goals.map(goal => ({ ...goal, tracked: false })));

  const toggleGoal = (index) => {
    const updatedGoals = trackedGoals.map((goal, i) => i === index ? { ...goal, tracked: !goal.tracked } : goal);
    setTrackedGoals(updatedGoals);
    updateProgress(updatedGoals);
  };

  return (
    <div>
      {trackedGoals.map((goal, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            checked={goal.tracked}
            onChange={() => toggleGoal(index)}
            className="mr-2"
          />
          {goal.name}
        </div>
      ))}
    </div>
  );
};

export default GoalTracker;
