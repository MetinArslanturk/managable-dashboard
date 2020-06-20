export const updateLayout = (layoutId, newLayout = []) => ({
  type: 'UPDATE_LAYOUT',
  newLayout,
  layoutId
});

export const setLayout = (
  layoutId = '',
  layoutItems = [],
  canAdd = []
) => ({
  type: 'SET_LAYOUT',
  layoutItems,
  layoutId,
  canAdd
});

export const addNewItem = (newItem) => ({
  type: 'ADD_NEW_ITEM',
  newItem
});

export const updateCanAdd = (layoutId, canAdd) => ({
  type: 'UPDATE_CAN_ADD',
  canAdd,
  layoutId
});

export const updateSingleItem = (newItem) => ({
  type: 'UPDATE_SINGLE_ITEM',
  newItem
});

export const removeItem = (i) => ({
  type: 'REMOVE_ITEM',
  i
});
