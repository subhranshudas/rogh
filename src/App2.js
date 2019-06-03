import React, { Component } from 'react';
import WidgetToolbar from './toolbar';
import WidgetGrid from './grid';


/**
 * widgetReducer: {
 *   axeGrid: {},
 *   axeClientGrid: {},
 *   salesPositionGrid: {}
 * }
 */


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridType: 0
    }
  }


  render() {
    const { gridType } = this.state;

    return (
      <div>
        <WidgetToolbar gridType={gridType} />
        <WidgetGrid gridType={gridType}/>
      </div>
    );
  }
}

export default App;
