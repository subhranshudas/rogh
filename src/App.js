import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';


const colDef = [
  {
    headerName: "Make", field: "make", sortable: true, filter: true, checkboxSelection: true
  },
  {
    headerName: "Model", field: "model", sortable: true, filter: true 
  },
  {
    headerName: "Price", field: "price", sortable: true, filter: true, editable: true
  }
];

const rowData = [];

const autoGroupColDef = {
  headerName: "Model",
  field: "model",
  cellRenderer:'agGroupCellRenderer',
  cellRendererParams: {
    checkbox: true
  }
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: colDef,
      rowData: rowData,
      autoGroupColumnDef: autoGroupColDef
    }
    this.onButtonClick = this.onButtonClick.bind(this);
    this.componentGridReady = this.componentGridReady.bind(this);
  }

  componentDidMount() {
    // fetch('https://api.myjson.com/bins/15psn9')
    fetch('https://api.myjson.com/bins/ly7d1')
    .then(result => result.json())
    .then(rowData => this.setState({rowData}))
  }

  componentGridReady(params) {
    this.gridApi = params.api
  }

  onButtonClick = e => {
    const selectedNodes = this.gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', \n')
    console.info(`Selected nodes: \n${selectedDataStringPresentation}`)
  }

  render() {
    return (
      <div 
        className="ag-theme-balham"
        style={{ 
        height: '500px', 
        width: '600px' }} 
      >
        <button onClick={this.onButtonClick}>Get selected rows</button>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowSelection="multiple"
          onGridReady={this.componentGridReady}
          // autoGroupColumnDef={this.state.autoGroupColumnDef}
          // groupSelectsChildren={true}
        >
        </AgGridReact>
      </div>
    );
  }
}

export default App;