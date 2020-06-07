export const updateLayout = (layoutId, newLayout = []) => ({
  type: 'UPDATE_LAYOUT',
  newLayout,
  layoutId
});

export const setLayout = (layoutId = '', layoutItems = []) => ({
  type: 'SET_LAYOUT',
  layoutItems,
  layoutId
});

export const addNewItem = (newItem) => ({
  type: 'ADD_NEW_ITEM',
  newItem
});

export const removeItem = (i) => ({
  type: 'REMOVE_ITEM',
  i
});
