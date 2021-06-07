import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack }from 'victory'; 
//VictoryBar = bar chart from victory library
//VictoryChart = creates the scaling on the x and y axis
//VictoryAxis = customize tick marks on the axis
//VictoryTheme = sets default better-looking color scale (still grey-scale) 
//VictoryStack= allow you to stack multiple bars atop another

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
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

const data2015= [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
]

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Victory Tutorial</h1>
        <VictoryChart
        //Themes should be applied to the outermost wrapper component, which is "VictoryChart" here
        theme={VictoryTheme.material}
        //For padding between value bars and y-axis 
          domainPadding={20} >
        <VictoryAxis 
        //tickValues = number of ticks and where
        tickValues={[1, 2, 3, 4]}
        tickFormat={["Quarter1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis 
        //The y-axis...
        dependentAxis
        //tickFormat prop specifies how ticks should be displayed. Value of x went from 5,000 to 20,000, initially, so we divid by 1000 and append "k" for readability
        tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack
        //colorScare prop overrides the default color scale provided my VictoryTheme.material
        colorScale={"warm"}>
        <VictoryBar 
          data = {data2012}
          x={"quarter"}
          y={"earnings"}
          />
          <VictoryBar 
          data = {data2013}
          x={"quarter"}
          y={"earnings"}
          />
          <VictoryBar 
          data = {data2014}
          x={"quarter"}
          y={"earnings"}
          />
          <VictoryBar 
          data = {data2015}
          x={"quarter"}
          y={"earnings"}
          />
          </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);