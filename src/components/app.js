import React, { Component } from 'react';

// Import Node Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Cookies from 'universal-cookie';

//Import Custom Components
import Header from './header';
import DateBox from './date-box';
import Graph from './graph';
import Card from './materialize/card';

const DateCookie = new Cookies(); // Declare Cookie to store data

export default class App extends Component {

  constructor(props){
    super(props);

    let weekendsLived = 0;
    let birthDate = new Date();
    let actualAge = 0;
    let setAge = 90;
    let graphFlag = false;
    if (typeof DateCookie.get('weekendsLived') != 'undefined'){
      weekendsLived = DateCookie.get('weekendsLived');
      graphFlag = true;
    }
    if (typeof DateCookie.get('birthDate') != 'undefined'){
      birthDate = new Date(DateCookie.get('birthDate'));
    }
    if (typeof DateCookie.get('actualAge') != 'undefined'){
      actualAge = DateCookie.get('actualAge');
    }
    if (typeof DateCookie.get('setAge') != 'undefined'){
      setAge = DateCookie.get('setAge');
    }


    this.state = {
      birthDate: birthDate,
      weekendsLived: weekendsLived,
      actualAge: actualAge,
      setAge: setAge,
      graphFlag: graphFlag
    };

    // Bind Methods
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);

  }

  handleDateChange(weekends, birthDate, actualAge){
    this.setState(
      {
        birthDate: birthDate,
        weekendsLived: weekends,
        actualAge: actualAge,
        graphFlag: true
      }
    );
    var dateInCookie = Intl.DateTimeFormat('en-US').format(birthDate);
    DateCookie.set('birthDate', dateInCookie, { path: '/', maxAge: 31536000 });
    DateCookie.set('weekendsLived', weekends, { path: '/', maxAge: 31536000 });
    DateCookie.set('actualAge', actualAge, { path: '/', maxAge: 31536000 });


  }
  handleAgeChange(setAge){
    this.setState({setAge: setAge});
    DateCookie.set('setAge', setAge, { path: '/', maxAge: 31536000 });
  }

  render() {
    //console.log("In App: actualAge " + this.state.actualAge);
    //console.log("In App: birthDate " + this.state.birthDate);
    //console.log("In App: weekendsLived " + this.state.weekendsLived);
    //console.log("In App: setAge " + this.state.setAge);
    return (
      <MuiThemeProvider>
        <div>
          <DateBox
            birthDate={this.state.birthDate}
            actualAge={this.state.actualAge}
            setAge={this.state.setAge}
            weekendsLived={this.state.weekendsLived}
            handleDateChange={this.handleDateChange}
            handleAgeChange={this.handleAgeChange}
          />
          <Graph
            graphFlag={this.state.graphFlag}
            weekendsLived={this.state.weekendsLived}
            setAge={this.state.setAge}
          />

        </div>
      </MuiThemeProvider>
    );
  }
}
