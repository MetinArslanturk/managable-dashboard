import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import GridLayout from 'react-grid-layout';
import { updateLayout, addNewItem } from '../../actions/gridlayout';

const GridDashboard = ({
  layoutItems,
  updateLayoutAction,
  addNewItemAction
}) => {
  const [isFirstInitCompleted, setFirstInit] = useState(false);

  const layoutChangeHandler = useCallback(
    (newLayout) => {
      if (!isFirstInitCompleted) {
        setFirstInit(true);
      } else {
        updateLayoutAction(newLayout);
      }
    },
    [isFirstInitCompleted, updateLayoutAction]
  );

  const createItem = (element) => {
    return <div key={element.i}>{element.i}</div>;
  };

  const addItem = () => {
    addNewItemAction({
      i: `${Date.now()}-ch-${layoutItems.length + 1}`,
      x: 5,
      y: 0,
      w: 1,
      h: 2
    });
  };

  return (
    <>
      <button type="button" onClick={addItem}>
        Add Item
      </button>
      <GridLayout
        className="layout"
        layout={layoutItems}
        cols={12}
        rowHeight={30}
        compactType={null}
        width={1200}
        onLayoutChange={layoutChangeHandler}
      >
        {layoutItems.map((element) => createItem(element))}
      </GridLayout>
    </>
  );
};

const mapStateToProps = (state) => ({
  layoutItems: state.gridlayout.layoutItems
});

const mapDispatchToProps = (dispatch) => ({
  updateLayoutAction: (newLayout) =>
    dispatch(updateLayout(newLayout)),
  addNewItemAction: (newItem) => dispatch(addNewItem(newItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridDashboard);
