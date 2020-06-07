import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import GridLayout from 'react-grid-layout';
import {
  updateLayout,
  addNewItem,
  removeItem
} from '../../actions/gridlayout';
import createElement from '../../helpers/elementCreator';

const GridDashboard = ({
  gridLayout,
  updateLayoutAction,
  addNewItemAction,
  removeItemAction
}) => {
  const [isFirstInitCompleted, setFirstInit] = useState(false);

  const layoutChangeHandler = useCallback(
    (newLayout) => {
      if (!isFirstInitCompleted) {
        setFirstInit(true);
      } else {
        updateLayoutAction(gridLayout.layoutId, newLayout);
      }
    },
    [gridLayout.layoutId, isFirstInitCompleted, updateLayoutAction]
  );

  const addItem = () => {
    addNewItemAction({
      i: `${Date.now()}-ch-${gridLayout.layoutItems.length + 1}`,
      x: 5,
      y: 0,
      w: 1,
      h: 2
    });
  };

  const removeItemHandler = (i) => {
    removeItemAction(i);
  };

  return (
    <>
      <button type="button" onClick={addItem}>
        Add Item
      </button>
      <GridLayout
        className="layout"
        layout={gridLayout.layoutItems}
        cols={12}
        rowHeight={30}
        compactType={null}
        width={1200}
        onLayoutChange={layoutChangeHandler}
      >
        {gridLayout.layoutItems.map((element) =>
          createElement(element, removeItemHandler)
        )}
      </GridLayout>
    </>
  );
};

const mapStateToProps = (state) => ({
  gridLayout: state.gridlayout.layout
});

const mapDispatchToProps = (dispatch) => ({
  updateLayoutAction: (layoutId, newLayout) =>
    dispatch(updateLayout(layoutId, newLayout)),
  addNewItemAction: (newItem) => dispatch(addNewItem(newItem)),
  removeItemAction: (i) => dispatch(removeItem(i))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridDashboard);
