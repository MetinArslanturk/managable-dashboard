export const updateLayout = (newLayout = []) => ({
  type: 'UPDATE_LAYOUT',
  newLayout
});

export const setLayout = (layoutItems = []) => ({
  type: 'SET_LAYOUT',
  layoutItems
});

export const addNewItem = (newItem) => ({
  type: 'ADD_NEW_ITEM',
  newItem
});
