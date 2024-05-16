import { Line } from 'react-chartjs-2';

const Graph = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Progress Percentage',
        data: data.map(item => item.progress),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default Graph;
