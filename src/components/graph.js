import React, { Component } from 'react';

export default class Graph extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let graphFlag = this.props.graphFlag;

    if(graphFlag){
      let weekendsLived = this.props.weekendsLived;
      let setAge = this.props.setAge;
      let weekendsLeft = setAge*52 - weekendsLived;

      let weekendsLeftArray = [];
      let weekendsLivedArray = [];
      for(let j = 0; j < weekendsLeft; j++){
        weekendsLeftArray.push(<span className="weekend-box" key={j}>&nbsp;</span>);
      }
      for(let j = 0; j < weekendsLived; j++){
        weekendsLivedArray.push(<span className="weekend-box past" key={j}>&nbsp;</span>);
      }

      return(
        <div className="row">
          <div className="col s12">
            <div className="card white">
            <div className="card-content grey-text text-darken-3">
              <span className="card-title">You've spent {weekendsLived} weekends and have {weekendsLeft} more to enjoy</span>
              <div className="weekend-box-container">
                {weekendsLivedArray}{weekendsLeftArray}
              </div>
              <span className="card-title">Bookmark this page and come back later. We will remember you and your details as long as you don't delete your cookies.</span>
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
