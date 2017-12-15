import React, { Component } from 'react';

import { PieChart, Pie, Sector, Cell } from 'recharts';

export default class Graph extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let graphFlag = this.props.graphFlag;

    if(graphFlag){
      let weekendsLived = Math.round(this.props.weekendsLived);
      let setAge = this.props.setAge;
      let weekendsLeft = setAge*52 - weekendsLived;

      /* Start Pie Data */

      const data = [{name: 'Weekends Lived', value: weekendsLived}, {name: 'Weekends Left', value: weekendsLeft}];
      const COLORS = ['#F72929', '#8AFF83'];

      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
       	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x  = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy  + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central" key={index}>
          	{`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

      let boxWidth = document.getElementById('mainContainer').offsetWidth / 5;
      if(Math.round(boxWidth) < 104){
        boxWidth = boxWidth * 2;
      }

      /* End Pie Data */

      let weekendsLeftArray = [];
      let weekendsLivedArray = [];
      for(let j = 0; j < weekendsLeft; j++){
        weekendsLeftArray.push(<span className="weekend-box" key={j + " " + weekendsLeft}>&nbsp;</span>);
      }
      for(let j = 0; j < weekendsLived; j++){
        weekendsLivedArray.push(<span className="weekend-box past" key={j + " " + weekendsLived}>&nbsp;</span>);
      }

      return(
        <div className="row">
          <div className="col s12">
            <div className="card white">
            <div className="card-content grey-text text-darken-3">
              <div className="row">
                <div className="col m12 l6">
                  <div className="row">
                    <div className="col s12 m6">
                      <span className="card-title">
                        Your Results
                      </span>
                      <span className="weekend-box past inline">&nbsp;</span> <span>Weekends Lived</span><br/>
                      <span className="weekend-box inline">&nbsp;</span> <span>Weekends Remaining</span><br/>&nbsp;<br/>
                      <p>Each box represents a weekend. Your weekends are limited and definitely countable. <br/>
                      <i>Feel free to bookmark this tool, come back later and stay motivated</i>.</p>
                    </div>
                    <div className="col s12 m6 center-align" id="piechartContainer">
                      <PieChart width={boxWidth} height={boxWidth} onMouseEnter={this.onPieEnter} id="weekendPieChart">
                        <Pie
                          dataKey="value"
                          key={data.name}
                          data={data}
                          cx={boxWidth/2.1}
                          cy={boxWidth/2.1}
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={boxWidth/2.5}
                          fill="#8884d8"
                        >
                          {
                            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)
                          }
                        </Pie>
                      </PieChart>
                    </div>
                  </div>
                  <span className="card-title">You've spent <b>{weekendsLived}</b> weekends and have <b>{weekendsLeft}</b> more to enjoy if you were to retire at <b>{setAge}</b></span>
                </div>
                <div className="col m12 l6">
                  <div className="weekend-box-container">
                    {weekendsLivedArray}{weekendsLeftArray}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      );
    }
    else {
      return(
        <div className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Let's get started</span>
              <p>Your Life Calendar shall appear here upon entering a valid date of birth.</p>
              <p><b>Disclaimer:</b> Upon entering any information on this page, cookies will be placed on your device. By continuing you agree to the use of cookies.</p>
            </div>
          </div>
          </div>
        </div>
      );
    }


  }
}
