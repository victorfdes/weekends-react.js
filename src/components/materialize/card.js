import React, { Component } from 'react';

export default class Card extends Component{
  constructor(props){
    super(props);

    this.state = {
      actualAge: this.props.actualAge,
    };
  }

  returnWelcomeMessage(){

  }

  render(){
    let actualAge = this.state.actualAge;
    let finalMessage = '';
    let welcomeTitle = '';
    if(actualAge !== 0){
      welcomeTitle = "Welcome Back Friend";
      finalMessage = "You seem to have visited us earlier. We remember your details. If you wish to update your date or age, simply edit those values again.";
    }
    else{
      welcomeTitle = "How's it going?";
      finalMessage = "Please enter your details and you will be presented with a graphical representation of the amount of weekends you can make the most of..";;
    }

    return(
      <div className="card grey darken-3">
        <div className="card-content white-text">
          <span className="card-title">{welcomeTitle}</span>
          <p className="infoBoxLeft">{finalMessage}</p>
        </div>
        <div className="card-action">
          <a href="https://victor-fernandes.com/how-many-weekends-do-i-have/" target="_blank">Why this project?</a>
          <a href="https://github.com/victorfdes/weekends-react.js" target="_blank">View Source</a>
        </div>
      </div>
    );
  }
}
