import React, { Component } from 'react';

import classes from './Alert.css';

import Aux from '../../../hoc/Aux';


class Alert extends Component {
  state = {
    typeBank: {
      'error': classes.Error
    },
    show: true
  }

  typeConverter = (type) => {
    return this.state.typeBank[type];
  }

  closeAlertHandler = (e) => {
    this.setState({ show: false });
  }

  render() {
    const alertElement = (
      <div 
        className={this.typeConverter(this.props.alertType)}
        onClick={(e) => this.closeAlertHandler(e) }>
        <span>{this.props.children}</span>
      </div>
    );

    return (
      <Aux>
        { this.state.show ? alertElement : null }
      </Aux>
    );
  }
}

export default Alert;
