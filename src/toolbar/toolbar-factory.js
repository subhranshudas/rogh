import AxeClientToolbar from './axe-client-toolbar';
import AxeGridToolbar from './axe-grid-toolbar';
import SalesPositionToolbar from './sales-position-toolbar';

export function getToolbarComponent(gridType) {
  if (gridType === 0) {
    return AxeClientToolbar;
  }
  else if (gridType === 1) {
    return AxeGridToolbar;
  }
  else if (gridType === 2) {
    return SalesPositionToolbar;
  }
};
