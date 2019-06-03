import React, { Component } from 'react';

const noRender = () => null;
const noop = () => {};


export default class CoreToolbar extends Component {
  render() {
    const { actions, renderToLeft = noRender, renderInMiddle = noRender, renderToRight = noRender } = this.props;
    const {
      onSaveFilterClick = noop,
      onClearAllFiltersClick = noop,
      onResetLayoutClick = noop,
      onExportToExcel = noop
    } = actions;

    return (
      <div style={{ border: '1px solid' }}>
        { renderToLeft()}
        <span onClick={onSaveFilterClick}> | SAVE | </span>
        <span onClick={onClearAllFiltersClick}> | CLEAR ALL | </span>
        { renderInMiddle() }
        <span onClick={onResetLayoutClick}> | RESET LAYOUT | </span>
        <span onClick={onExportToExcel}> | EXPORT TO EXCEL | </span>
        { renderToRight() }
      </div>
    );
  }
}

/**
 * CORE actions
 * onSaveFilterClick
 * onClearAllFiltersClick
 * onResetLayoutClick
 * onExportToExcel
 * renderToLeft
 * renderInMiddle
 * renderToRight
 */

 /**
  * API usage
  * 
  * <CoreToolbar actions={ onSaveFilterClick, onClearAllFiltersClick, onResetLayoutClick}>
  *   <ToolbarButtonGroup />
  *   <ToolbarButtonGroupLeft />
  *   <ToolbarButtonGroupRight />
  * </CoreToolbar>
  */