import React from 'react';
import { ResponsiveContainer,  AreaChart, Area, XAxis, YAxis} from 'recharts';

const data = [
	{price: 2650, bid: 240},
	{price: 2600, bid: 200},
	{price: 2550, bid: 160},
	{price: 2500, bid: 120},
	{price: 2450, bid: 30},
	{price: 2400, ask: 30},
	{price: 2350, ask: 100},
	{price: 2300, ask: 140},
	{price: 2250, ask: 220},
	{price: 2300, ask: 260}
];

// const data = [
// 	{ price: 55.21363218, bid: 1671 },
// 	{ price: 56.86319039, bid: 398.04 },
// 	{ price: 59.95965677, bid: 75.48 },
// ];

// Hides the last YAxis ticks
// TODO: Do it in CSS
const lastYAxisTicks = document.querySelectorAll('.recharts-yAxis .recharts-cartesian-axis-tick:first-child');
for (const element of lastYAxisTicks) {
	element.style.display = 'none';
}

export default () => (
	<ResponsiveContainer width="100%" height={380}>
		<AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

			<Area
				dataKey="bid"
				type="linear"
				stroke="#10D876"
				fillOpacity={1}
				fill="#487561"
				isAnimationActive={false}
			/>
			<Area
				dataKey="ask"
				type="linear"
				stroke="#E50202"
				fillOpacity={1}
				fill="#7F4040"
				isAnimationActive={false}
			/>
			<XAxis
				dataKey="price"
				axisLine={{
					stroke: "#131722",
					strokeWidth: 2
				}}
				tickLine={{
					stroke: '#808fa3'
				}}
				tick={{
					fontFamily: "inherit",
					fontSize: "12px",
					fill: "#7f8fa4"
				}}
			/>
			<YAxis
				yAxisId={0}
				mirror
				domain={[100, 'dataMax']}
				axisLine={{
					stroke: '#131722',
					strokeWidth: 4
				}}
				tickLine={{
					stroke: '#808fa3'
				}}
				tick={{
					fontFamily: "inherit",
					fontSize: "12px",
					fill: "#7f8fa4"
				}}
			/>
			<YAxis
				dataKey="ask"
				yAxisId={1}
				mirror
				orientation="right"
				domain={[100, 'dataMax']}
				axisLine={{
					stroke: "#131722",
					strokeWidth: 2
				}}
				tickLine={{
					stroke: '#808fa3'
				}}
				tick={{
					fontFamily: "inherit",
					fontSize: "12px",
					fill: "#7f8fa4"
				}}
			/>
			{/*<Tooltip/>*/}
		</AreaChart>
	</ResponsiveContainer>
);
