import React from 'react';
import ReactDOM from 'react-dom';

// import * as V from 'victory';

import { 
    VictoryBar, 
    VictoryChart, 
    VictoryAxis, 
    VictoryTheme,
    VictoryStack,
    VictoryLine,
    VictoryVoronoiContainer,
  } from 'victory';

const data2012 = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];
  
const data2013 = [
    {quarter: 1, earnings: 15000},
    {quarter: 2, earnings: 12500},
    {quarter: 3, earnings: 19500},
    {quarter: 4, earnings: 13000}
];
  
const data2014 = [
    {quarter: 1, earnings: 11500},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 20000},
    {quarter: 4, earnings: 15500}
];
  
const data2015 = [
    {quarter: 1, earnings: 18000},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 15000},
    {quarter: 4, earnings: 12000}
];
  
export const BarChart = () => {
    return (
        <div>
            <VictoryChart domainPadding={20}>
                <VictoryAxis
                    theme={VictoryTheme.material}
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`$${x/1000}k`)}
                />
                <VictoryStack colorScale={"warm"}>
                    <VictoryBar
                        data={data2012}
                        x="quarter"
                        y="earnings"
                    />
                    <VictoryBar
                        data={data2013}
                        x="quarter"
                        y="earnings"
                    />
                    <VictoryBar
                        data={data2014}
                        x="quarter"
                        y="earnings"
                    />
                    <VictoryBar
                        data={data2015}
                        x="quarter"
                        y="earnings"
                    />
                </VictoryStack>
            </VictoryChart>
        </div>
    )
}


export const LineChart = () => {
    return (
        <div>
            <VictoryChart
                theme={VictoryTheme.material}
            >
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31", strokeWidth: 5 },
                        parent: { border: "1px solid #ccc"}
                    }}
                    data={[
                        { x: 0, y: 0 },
                        { x: 2, y: 1 },
                        { x: 1, y: 2 },
                        { x: 3, y: 3 },
                        { x: 1, y: 4 },
                        { x: 3, y: 5 },
                        { x: 2, y: 6 },
                        { x: 3, y: 7 },
                        { x: 1, y: 8 },
                        { x: 1, y: 9 },
                        { x: 1, y: 10 },
                        { x: 2, y: 11 },
                        { x: 3, y: 12 },
                        { x: 1, y: 13 },
                        { x: 4, y: 14 },
                        { x: 1, y: 15 },
                        { x: 2, y: 16 },
                        { x: 2, y: 17 },
                        { x: 1, y: 18 },
                        { x: 1, y: 19 }
                    ]}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                    height={200}
                    padding={{ top: 20, bottom: 60 }}
                >

                </VictoryLine>
            </VictoryChart>
        </div>
    )
}
