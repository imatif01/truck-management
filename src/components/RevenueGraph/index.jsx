import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { IoIosArrowDown } from 'react-icons/io';

const monthlyData = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  data: [12, 18, 22, 19, 25, 30, 28, 24, 20, 15, 10, 14],
};

const yearlyData = {
  categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  data: [100, 150, 200, 180, 220, 240, 260],
};

const RevenueGraph = ({ isLoading }) => {
  const chartRef = useRef(null);
  const [view, setView] = useState('monthly');
  const [dropdown, setDropdown] = useState(false);

  const getChartOptions = (view) => ({
    title: { text: '' },
    chart: {
      type: 'spline',
      spacingLeft: 0,
      marginLeft: 80,
      marginRight: 20,
      spacingBottom: -20,
      backgroundColor: 'transparent',
    },
    xAxis: {
      categories: view === 'yearly' ? yearlyData.categories : monthlyData.categories,
      crosshair: {
        width: 1,
        color: '#007BFF',
        dashStyle: 'Dash',
      },
      gridLineWidth: 1,
      gridLineColor: '#F3F2F7',
      lineColor: '#D3D3D3',
      labels: {
        style: { color: '#A3A3A3' },
      },
    },
    yAxis: {
      title: { text: null },
      labels: {
        style: { color: '#A3A3A3' },
        formatter: function () {
          return `${this.value} to ${this.value + 5}`;
        },
      },
      gridLineWidth: 0,
    },
    tooltip: { shared: true },
    plotOptions: {
      series: {
        animation: { duration: 1000 },
        marker: { enabled: false },
        lineWidth: 2,
      },
    },
    series: [
      {
        name: 'Revenue',
        data: view === 'yearly' ? yearlyData.data : monthlyData.data,
        color: '#2D9CDB',
        lineWidth: 2,
      },
    ],
    responsive: {
      rules: [{ condition: { maxWidth: 500 }, chartOptions: {} }],
    },
  });

  const [chartObject, setChartObject] = useState(getChartOptions(view));

  useEffect(() => {
    setChartObject(getChartOptions(view));
  }, [view]);

  return (
    <>
      <div className="head">
        <h2 className="h1">Total Revenue</h2>
        <div className={dropdown ? 'list-holder active' : 'list-holder'}>
          <span className="label-holder" onClick={() => setDropdown(true)}>
            {view}
            <IoIosArrowDown className="icon" />
          </span>
          <div className="list" onClick={() => setDropdown(false)}>
            <button onClick={() => setView('monthly')}>Monthly</button>
            <button onClick={() => setView('yearly')}>Yearly</button>
          </div>
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={chartObject} ref={chartRef} />
    </>
  );
};

export default RevenueGraph;
