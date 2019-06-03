import React, { Fragment } from 'react';
import CoreToolbar from './core-toolbar';

export default (props) => {
  const { onExpandClick, onCollapseClick, ...coreToolbarProps } = props;

  return (
    <CoreToolbar
      {...coreToolbarProps}
      renderToLeft={ () =>
        <Fragment>
          <span onClick={onExpandClick}> EXPAND ALL </span>
          <span onClick={onCollapseClick}> COLLAPSE ALL </span>
        </Fragment>
      }
    />
  );
};

