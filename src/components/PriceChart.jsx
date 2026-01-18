// // @ts-nocheck
// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { fetchCoinChart } from '../services/coinGeckoAPI';

// function PriceChart({ coinId }) {
//   const [chartData, setChartData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [timeframe, setTimeframe] = useState(7);

//   useEffect(() => {
//     const getChartData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchCoinChart(coinId, timeframe);
        
//         // Transform API data into format Recharts needs
//         const formattedData = data.prices.map((price) => ({
//           date: new Date(price[0]).toLocaleDateString(),
//           price: price[1]
//         }));
        
//         setChartData(formattedData);
//       } catch (err) {
//         console.error('Failed to fetch chart data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getChartData();
//   }, [coinId, timeframe]);

//   const timeframes = [
//     { label: '1D', days: 1 },
//     { label: '7D', days: 7 },
//     { label: '30D', days: 30 },
//     { label: '1Y', days: 365 }
//   ];

//   if (loading) {
//     return (
//       <div className="bg-gray-800 p-6 rounded-lg">
//         <p className="text-center text-gray-400">Loading chart...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-slate-100 border shadow-lg p-6 rounded-lg">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Price Chart</h2>
        
//         {/* Timeframe buttons */}
//         <div className="flex gap-2">
//           {timeframes.map((tf) => (
//             <button
//               key={tf.days}
//               onClick={() => setTimeframe(tf.days)}
//               className={`px-4 py-2 rounded-lg transition ${
//                 timeframe === tf.days
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//               }`}
//             >
//               {tf.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Chart */}
//       <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={chartData}>
//           <XAxis 
//             dataKey="date" 
//             stroke="#9CA3AF"
//             style={{ fontSize: '12px' }}
//           />
//           <YAxis 
//             stroke="#9CA3AF"
//             style={{ fontSize: '12px' }}
//             domain={['auto', 'auto']}
//           />
//           <Tooltip 
//             contentStyle={{ 
//               backgroundColor: '#1F2937', 
//               border: '1px solid #374151',
//               borderRadius: '8px'
//             }}
//             labelStyle={{ color: '#9CA3AF' }}
//           />
//           <Line 
//             type="monotone" 
//             dataKey="price" 
//             stroke="#3B82F6" 
//             strokeWidth={2}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default PriceChart;