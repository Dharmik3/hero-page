import * as React from "react";
import Chart from "chart.js/auto";
import "./styles.css";

const Graph = ({ data }: { data: any }) => {
  const graphData = data?.slice(Math.max(data?.length - 6, 0));
  const labels = graphData?.map(
    (entry: { month: number; year: number }) => `${entry.month}, ${entry.year}`
  );
  const systolicValues = graphData?.map(
    (entry: { blood_pressure: { systolic: { value: number } } }) =>
      entry.blood_pressure.systolic.value
  );
  const diastolicValues = graphData?.map(
    (entry: { blood_pressure: { diastolic: { value: number } } }) =>
      entry.blood_pressure.diastolic.value
  );
  const chartRef = React.useRef(null);
  const chartInstanceRef = React.useRef(null);

  React.useEffect(() => {
    //   @ts-ignore
    const ctx = chartRef.current.getContext("2d");
    if (chartInstanceRef.current) {
      //   @ts-ignore
      chartInstanceRef.current.destroy();
    }
    //   @ts-ignore
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            data: systolicValues,
            label: "Systolic",
            borderColor: "#C26EB4",
            fill: false,
            tension: 0.4,
            pointBackgroundColor: "#C26EB4",
            pointBorderColor: "#fff",
            pointBorderWidth: 1,
            pointRadius: 6,
          },
          {
            data: diastolicValues,
            label: "Diastolic",
            borderColor: "#7E6CAB",
            fill: false,
            tension: 0.4,
            pointBackgroundColor: "#7E6CAB",
            pointBorderColor: "#fff",
            pointBorderWidth: 1,
            pointRadius: 6,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        //   @ts-ignore
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas id="line-chart" ref={chartRef} className="graph"></canvas>;
};

export default Graph;
