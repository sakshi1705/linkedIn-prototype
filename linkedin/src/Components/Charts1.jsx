import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack } from 'victory';









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
  
  class Charts1 extends React.Component {
    render() {
      return (
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Job1", "Job2", "Job3", "Job4","Job5"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryStack
            colorScale={"warm"}
          >
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
      )
    }
  }
  
  //ReactDOM.render(<Charts1/>, mountNode);
  export default Charts1;