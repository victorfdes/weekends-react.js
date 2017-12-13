import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ToggleStar from 'material-ui/svg-icons/toggle/star';



export default class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <span href="#" className="brand-logo">Logo</span>
        </div>
      </nav>
    );
  }
}
