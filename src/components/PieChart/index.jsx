import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {
  // Limit dataset to 3 items
  const staticData = [{ value: 500 }, { value: 300 }, { value: 200 }];

  // Calculate total sum for percentage calculation
  const totalValue = staticData.reduce((acc, item) => acc + item.value, 0);

  // Only 3 colors to match the dataset
  const colors = ['var(--heading-color)', '#7F87FD', '#9B9BBF'];

  const mainOptions = {
    credits: { enabled: false }, // Remove Highcharts label
    chart: {
      type: 'pie',
      spacing: [0, 0, 0, 0], // Remove all spacing
      margin: [0, 0, 0, 0], // Remove all margins
      backgroundColor: 'transparent',
    },
    title: '',
    subtitle: {
      useHTML: true,
      text: 'Payouts',
      floating: true,
      verticalAlign: 'middle',
      y: 30,
    },
    legend: { enabled: false },
    tooltip: { valueDecimals: 2, valueSuffix: ' TWh' },
    plotOptions: {
      series: {
        type: 'pie',
        size: '100%',
        innerSize: '80%',
        dataLabels: {
          enabled: false, // Remove labels
        },
      },
    },
    colors,
    series: [
      {
        name: 'Energy Production',
        data: staticData.map((item, index) => ({
          y: item.value,
          color: colors[index],
        })),
      },
    ],
  };

  return (
    <div>
      <div className="large-chart">
        <HighchartsReact highcharts={Highcharts} options={mainOptions} />
      </div>
      <div className="small-charts">
        {staticData.map((item, index) => {
          const percentage = (item.value / totalValue) * 100 + '%';
          return (
            <div key={index} className="chart">
              <HighchartsReact
                highcharts={Highcharts}
                options={{
                  credits: { enabled: false },
                  chart: {
                    type: 'pie',

                    spacing: [0, 0, 0, 0], // Remove spacing
                    margin: [0, 0, 0, 0], // Remove margins
                    backgroundColor: 'transparent',
                  },
                  colors: [colors[index]], // Use only 3 colors
                  title: null,
                  series: [
                    {
                      data: [
                        { y: item.value, color: colors[index] },
                        { y: totalValue - item.value, color: '#E0E2F4' }, // Fills the remaining part
                      ],
                      size: '100%',
                      innerSize: '70%',
                      dataLabels: { enabled: false },
                    },
                  ],
                }}
              />
              <div style={{ marginTop: '5px', fontSize: '14px', fontWeight: 'bold' }}>
                +{percentage}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChart;
