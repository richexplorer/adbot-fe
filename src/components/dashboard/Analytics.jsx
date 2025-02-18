import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

const Analytics = () => {
  const getOption = () => ({
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Impressions', 'Clicks', 'Conversions']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        return format(date, 'MMM dd');
      })
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Impressions',
        type: 'line',
        data: [1200, 1320, 1500, 1800, 2200, 2500, 2800]
      },
      {
        name: 'Clicks',
        type: 'line',
        data: [120, 132, 150, 180, 220, 250, 280]
      },
      {
        name: 'Conversions',
        type: 'line',
        data: [20, 22, 25, 30, 35, 40, 45]
      }
    ]
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Impressions</h3>
          <p className="text-3xl font-bold text-blue-600">13,320</p>
          <p className="text-sm text-green-600 mt-2">+12.5% from last week</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Clicks</h3>
          <p className="text-3xl font-bold text-blue-600">1,332</p>
          <p className="text-sm text-green-600 mt-2">+8.2% from last week</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Conversion Rate</h3>
          <p className="text-3xl font-bold text-blue-600">3.2%</p>
          <p className="text-sm text-green-600 mt-2">+2.1% from last week</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
        <ReactECharts option={getOption()} style={{ height: '400px' }} />
      </motion.div>
    </div>
  );
};

export default Analytics;