import React, { Fragment } from 'react';
import CoreToolbar from './core-toolbar';


export default (props) => {
  const { onBuyClick, onSellClick, onAlertCLick, ...coreToolbarProps } = props;

  return (
    <CoreToolbar
      {...coreToolbarProps}
      renderInMiddle={() =>
        <Fragment>
          <span onClick={onBuyClick}> BUY </span>
          <span onClick={onSellClick}> SELL </span>
        </Fragment>
      }
      renderToRight={() =>
        <span onClick={onAlertCLick}> ALERT </span>
      }
    />
  );
};

