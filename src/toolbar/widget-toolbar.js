import React, { Component, Fragment } from 'react';
import { getToolbarComponent } from './toolbar-factory';

/**
 * this will be a redux container,
 * abstract and extract all state affecting actions here
 * to pass down to the component tree
 */
export default class WidgetToolbar extends Component {
  constructor(props) {
    super(props);
  }

  getAxeClientGridToolbarProps() {
    return {
      onExpandClick: () => console.warn('axeClientGrid.expand()'),
      onCollapseClick: () => console.warn('axeClientGrid.collapse()')
    };
  }

  getAxeGridToolbarProps() {
    return {};
  }

  getSalesPositionGridToolbarProps() {
    return {
      onBuyClick: () => console.warn('salesPositionGrid.buy()'),
      onSellClick: () => console.warn('salesPositionGrid.sell()'),
      onAlertClick: () => console.warn('salesPositionGrid.alert()')
    };
  }

  getCoreToolbarProps() {
    return {
      actions: {
        onSaveFilterClick: () => console.log('core.onSaveFilterClick()'),
        onClearAllFiltersClick: () => console.log('core.onClearAllFiltersClick()'),
        onResetLayoutClick: () => console.log('core.onResetLayoutClick()'),
        onExportToExcel: () => console.log('core.onExportToExcel()')
      }
    };
  }

  getToolbarProps(gridType) {
    const coreToolbarProps = this.getCoreToolbarProps();
    let customToolbarProps = {};

    if (gridType === 0) {
      customToolbarProps = this.getAxeClientGridToolbarProps();
    }
    else if (gridType === 1) {
      customToolbarProps = this.getAxeGridToolbarProps();
    }
    else if (gridType === 2) {
      customToolbarProps = this.getSalesPositionGridToolbarProps();
    }

    return {
      ...coreToolbarProps,
      ...customToolbarProps
    };
  }

  render() {
    const { gridType } = this.props;
    const toolbarProps = this.getToolbarProps(gridType);
    const Toolbar = getToolbarComponent(gridType);

    return (
      <div>
        <Toolbar {...toolbarProps} />
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

