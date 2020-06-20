import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import GridLayout from 'react-grid-layout';
import {
  updateLayout,
  addNewItem,
  removeItem,
  updateSingleItem,
  updateCanAdd
} from '../../actions/gridlayout';
import createElement from '../../helpers/elementCreator';
import AddingPermissionsModal from '../../helpers/modals/AddingPermissionsModal';
import EditItemModal from '../../helpers/modals/EditItemModal';
import AddItemModal from '../../helpers/modals/AddItemModal';

const GridDashboard = ({
  gridLayout,
  updateLayoutAction,
  addNewItemAction,
  removeItemAction,
  updateSingleItemAction,
  editType,
  updateCanAddAction
}) => {
  const [isFirstInitCompleted, setFirstInit] = useState(false);
  const [editElement, setEditElement] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [
    showAddPermissionModal,
    setShowAddPermissionModal
  ] = useState(false);
  const [canAddList, setCanAddList] = useState([]);
  const layoutChangeHandler = useCallback(
    (newLayout) => {
      if (isFirstInitCompleted) {
        updateLayoutAction(gridLayout.layoutId, newLayout);
      }
    },
    [gridLayout.layoutId, isFirstInitCompleted, updateLayoutAction]
  );

  useEffect(() => {
    if (gridLayout.layoutId) {
      setFirstInit(true);
    }
  }, [gridLayout.layoutId]);

  const addItem = () => {
    setShowAddItemModal(true);
  };

  const removeItemHandler = useCallback(
    (i) => {
      removeItemAction(i);
    },
    [removeItemAction]
  );

  const handleEditModalClose = () => setShowEditModal(false);

  const handleAddItemModalClose = () => setShowAddItemModal(false);

  const handleAddItemModalSave = (item) => {
    if (gridLayout.layoutItems.some((it) => it.type === item)) {
      return;
    }

    addNewItemAction({
      i: `${item}${Date.now()}-${gridLayout.layoutItems.length + 1}`,
      x: 5,
      y: 0,
      isDraggable: true,
      canRemove: true,
      isResizable: true,
      w: 1,
      h: 2,
      type: item
    });

    setShowAddItemModal(false);
  };

  const handleAddPermissionModalClose = () =>
    setShowAddPermissionModal(false);

  const handleEditModalSave = () => {
    updateSingleItemAction(editElement);
    setShowEditModal(false);
  };

  const modalHandler = useCallback(
    (i) => {
      setEditElement({ ...i });
      setShowEditModal(true);
    },
    [setEditElement, setShowEditModal]
  );

  const addPermissionModalHandler = () => {
    setCanAddList([...gridLayout.canAdd]);
    setShowAddPermissionModal(true);
  };

  const setAddPermission = (val, key) => {
    const alreadyThere = canAddList.some((elm) => elm === key);

    if (val) {
      if (!alreadyThere) {
        canAddList.push(key);
        setCanAddList([...canAddList]);
      }
    } else if (alreadyThere) {
      setCanAddList(canAddList.filter((elm) => elm !== key));
    }
  };

  const handleAdPermissionModalSave = () => {
    updateCanAddAction(gridLayout.layoutId, canAddList);
    setShowAddPermissionModal(false);
  };

  return (
    <>
      <div className="grid-actions">
        {editType === 'teacherOwn' && (
          <div className="course-select">
            <Form.Control as="select">
              <option>BTO625</option>
              <option>BEB652</option>
            </Form.Control>
          </div>
        )}
        {editType === 'teacherStudent' && (
          <Button onClick={addPermissionModalHandler} variant="dark">
            Adding Permissions
          </Button>
        )}
        <Button
          className="add-item-button"
          onClick={addItem}
          variant="primary"
        >
          Add Item
        </Button>
      </div>
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
          createElement(
            element,
            editType,
            removeItemHandler,
            modalHandler
          )
        )}
      </GridLayout>

      <EditItemModal
        showEditModal={showEditModal}
        handleEditModalClose={handleEditModalClose}
        editElement={editElement}
        setEditElement={setEditElement}
        handleEditModalSave={handleEditModalSave}
      />

      <AddItemModal
        showAddItemModal={showAddItemModal}
        handleAddItemModalClose={handleAddItemModalClose}
        handleAddItemModalSave={handleAddItemModalSave}
        canAddList={gridLayout.canAdd}
      />

      <AddingPermissionsModal
        showAddPermissionModal={showAddPermissionModal}
        handleAddPermissionModalClose={handleAddPermissionModalClose}
        handleAdPermissionModalSave={handleAdPermissionModalSave}
        canAddList={canAddList}
        setAddPermission={setAddPermission}
      />
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
  updateCanAddAction: (layoutId, canAdd) =>
    dispatch(updateCanAdd(layoutId, canAdd)),
  removeItemAction: (i) => dispatch(removeItem(i)),
  updateSingleItemAction: (newItem) =>
    dispatch(updateSingleItem(newItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridDashboard);
