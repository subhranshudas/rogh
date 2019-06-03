import React, { Component, Fragment } from 'react';


const withToggle = Toolbar => {
  class WithToggleToolbar extends Component {
    render () {
      const {onToggle, isToggleActive, ...toolbarProps} = this.props;

      return (
        <Fragment>
          <span> <input type="checkbox" onChange={onToggle} checked={isToggleActive}/> toggle </span>
          <Toolbar {...toolbarProps} />
        </Fragment>
      );
    }
  }

  return WithToggleToolbar;
};

export default withToggle;