// import Charty from 'react-charty'
import { partyVotes} from "../data/electraka"
import React, { Component} from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
  BarElement,
	PointElement,
	LineElement,
  ArcElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { lgas } from "../data/lgas"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
  BarElement,
  ArcElement,
	Title,
	Tooltip,
	Legend,
);

// "#93a5be"//"#8965e0"//"#4c5680""#4c5680"

export const ProjectChart = ({chartData}) => {
	const data = {
		labels: chartData.labels,
		datasets: chartData.data.map(data => {
			return {
				label: data.label,
				data: data.series,
				fill:false,
				backgroundColor: data.backgroundColor
			}
		})
	};
	const options = {
		scales: {
		y: {
			min: 0,
			max: 100,
			grid: {display: false}
		},
		x: {
			grid: {display: false}
		}
		},
		responsive: true,
		plugins: {
		legend: {
			position: "top",
			labels: {
			pointStyle: "circle",
			usePointStyle: true,
			// pointStyleWidth: 10
			}
		},
		title: {
			display: true,
			fontSize: 18,
			position: "top",
			// text: `Total Projects/LGA against Monitored Projects`
		},
		},
		pointBackgroundColor: "black",
		};

	return (
		<Bar data={data} options={options}/>
	);
};


export const PieChart = (props) => {
  const { labels = [], series = [], title="" } = props;

  const data = {
    labels: ["APC", "PDP", "NNPP"],
    datasets: [
      {
        label: "serie.title",
        data: [167,60, 10],
        cutout: "60%",
        radius: "100%",
        categoryPercentage: 0.5,
        barPercentage: 1,
        backgroundColor: ["red", "blue", "green"]
      }
    ]
  };
  const options = {
		responsive: false,
		plugins: {
			legend: {display: false, position: "top"},
		},
	};

  return (
    <div className="flex items-center justify-center pb-10 max-h-80">
      <Doughnut data={data} options={options}/>
    </div>
  );
};

export const BarChart = (props) => {
  const { labels = [], series = [], title="" } = props;

  const data = {
    labels: labels,
    datasets: series.map((serie, index) => {
      return {
        label: serie.title,
        data: serie.series,
        fill:false,
        barThickness: 10,
        borderRadius: {topLeft: 2.5, topRight: 2.5},
        categoryPercentage: 0.5,
        barPercentage: 1,
        backgroundColor: serie.backgroundColor
      }
    })
  };
  const options = {
		responsive: true,
		plugins: {
			legend: {display: false, position: "top"},
			title: {display: false, text: title},
		},
    scales: { 
      y: {
        grid: {
          display: false
        }
      },
      x: { 
        grid: {
          display: false
        }
    }}
	};

  return (
    <Bar data={data} options={options}/>
  );
};

export const LineChart = (props) => {
  const { labels = [], series = [] } = props;

  const data = {
    labels: labels,
    datasets: series.map((serie, index) => {
      return {
        label: index === 0 ? "Completed Projects":"All Projects",
        data: serie,
        fill:false,
        barThickness: 5,
        lineTension: 0.5,
        // categoryPercentage: 0.7,
        // barPercentage: 0.5,
        backgroundColor: index === 0 ? "#1B998B":"#C96480"
      }
    })
  };
  const options = {
		responsive: true,
		plugins: {
      legend: {
        position: "top",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          // pointStyleWidth: 10
        }
      },
    },
	};

  return (
    <Line data={data} options={options}/>
  );
};

export const AreaChart = (props) => {
  const { labels, series, title } = props

  const data = {
    labels: labels, //.map(label => label.length > 20 ? '...'+label.slice(label.length-20, label.length): label),
    datasets: [{
      label: title,
      data: series,
      fill: 'origin',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      lineTension: 0.5,
    },
  ]
  };

  return (
    <Line data={data} options={options}/>
  );
};


export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom"
    },
    title: {
      display: false,
      fontSize: 18,
      position: "top",
      text: `Total Projects/LGA`
    },
  },
  pointBackgroundColor: "black",
  scales: { 
    y: {
      grid: {
        display: true
      },
      ticks: { 
        callback: (value, index, ticks) => {
          return value //formatDigits(value)
          }
        },
    x: { 
      grid: {
        display: true
      },
      ticks: {
        maxRotation: 80,
        callback: function(value, index) {
        const tick = this.getLabelForValue(value)
        const tickLength = tick.length
        return tickLength>10 ? '...' + tick.substring(tickLength-10, tickLength): tick
      }}
  }}
}};


const DARK_THEME = {
  grid: { color: '#fff', alpha: 0.1, markerFillColor: '#242f3e' },
  legend: { background: '#1c2533', color: '#fff' },
  preview: { maskColor: '#304259', maskAlpha: 0.6, brushColor: '#56626D', brushBorderAlpha: 0, handleColor: '#fff' },
  xAxis: { textColor: '#A3B1C2', textAlpha: 0.6 },
  yAxis: { textColor: '#A3B1C2', textAlpha: 0.6 },
  title: { color: '#fff' },
  localRange: { color: '#fff' },
  zoomedRange: { color: '#fff' },
  zoomText: { color: '#108BE3' },
  zoomIcon: { fill: '#108BE3' },
  buttons: { color: '#fff' },
  pie: { textColor: '#fff' },
};

const MINIMAL_EXAMPLE_DATA = {
    type: 'stacked_bar',
    data: {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      y0: [-20, 0, 20, 23, 25, 28, 40, 50, 33, 23, 14, 3, 15, 16, 18, 20, 34, 44, 30, 31, 43, 22, 15, 27, 23],
      y1: [-20, 0, 20, 23, 25, 28, 40, 50, 33, 23, 14, 3, 15, 16, 18, 20, 34, 44, 30, 31, 43, 22, 15, 27, 23].reverse()
    },
    colors: {
      y0: '#5FB641',
      y1: '#5F4641'
    },
    names: {
      y0: 'Temperature, C°',
      y1: 'Farenheit, F'
    },
    startX: 1,
    endX: 10,
    xAxisStep: 2,
    showPreview: true,
    showRangeText: true,
    showLegendTitle: true
  };
  

// export default class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//     }
//   }
//   render () {
//     return (
//       <div className="w-full">
//         <Charty title="Temperature" {...MINIMAL_EXAMPLE_DATA} />
//       </div>
//     )
//   }
// }