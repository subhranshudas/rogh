import React, { Component, Fragment } from 'react';

export default class WidgetGrid extends Component {
  render() {
    const { gridType } = this.props;

    return (
      <div> GRID {gridType}</div>
    );
  }
}