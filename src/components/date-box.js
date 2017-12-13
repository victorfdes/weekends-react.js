import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

import Card from './materialize/card';

export default class DateBox extends Component {

  constructor(props){
    super(props);

    this.state ={
      ageError: null,
      actualAge: this.props.actualAge,
      setAge: this.props.setAge
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
  }

  handleDateChange = (event, date) => {
    let today = new Date();
    let diff = this.weekends(date, today);
    let actualAge = Math.round(diff*7/365);
    this.props.handleDateChange(diff, date, actualAge); // Set state in App for weekendsLeft, birthDate, actualAge
    this.setState({actualAge: actualAge});
  };

  handleAgeChange = (event) => {
    let currentAge = Math.round(event.target.value);
    this.setState({setAge: currentAge});
    if(currentAge <= this.props.actualAge){this.setState({ageError: 'You seem to have already past fun days'});}
    if(currentAge >= 120){this.setState({ageError: 'Good to be optimistic, bad for RAM'});}
    if(currentAge > this.props.actualAge && currentAge < 120){
      this.props.handleAgeChange(currentAge);
      this.setState({ageError: null});
    }
  };

  weekends(first, second) {
    return Math.round((second-first)/(1000*60*60*24*7));
  }


  render() {
    return (
        <div className="row">
          <div className="col s12 m6">
            <Card
              actualAge={this.state.actualAge}
            />
          </div>
          <div className="col s12 m6">
            <div className="card white">
                <div className="card-content white-text">
                  <span className="card-title grey-text text-darken-4">Date of Birth</span>
                  <DatePicker
                    hintText="Pick Date of Birth"
                    value={this.props.birthDate}
                    onChange={this.handleDateChange}
                  />
                  <br/>
                  <span className="card-title grey-text text-darken-4">You'll retire at?</span>
                  <TextField
                    id="userAge"
                    type="number"
                    value={this.state.setAge}
                    errorText={this.state.ageError}
                    onChange={this.handleAgeChange}
                  />
                </div>
            </div>
          </div>
        </div>
    );
  }
}
