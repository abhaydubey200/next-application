import { useState, useEffect } from 'react';
import GoalTracker from '../components/GoalTracker';
import ProgressBar from '../components/ProgressBar';
import Graph from '../components/Graph';
import NavBar from '../components/NavBar';

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [goals, setGoals] = useState([
    { name: 'Goal 1' },
    { name: 'Goal 2' },
    { name: 'Goal 3' },
  ]);
  const [graphData, setGraphData] = useState([]);

  const updateProgress = (updatedGoals) => {
    const totalGoals = updatedGoals.length;
    const completedGoals = updatedGoals.filter(goal => goal.tracked).length;
    const newProgress = (completedGoals / totalGoals) * 100;
    setProgress(newProgress);
    setGraphData([...graphData, { date: new Date().toLocaleDateString(), progress: newProgress }]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <GoalTracker goals={goals} updateProgress={updateProgress} />
      <ProgressBar progress={progress} />
      <Graph data={graphData} />
      <NavBar />
    </div>
  );
};

export default Home;
