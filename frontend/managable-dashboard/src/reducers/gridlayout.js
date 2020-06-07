const gridLayoutDefaultState = {
  layout: { layoutId: '', layoutItems: [] }
};

export default (state = gridLayoutDefaultState, action) => {
  switch (action.type) {
    case 'SET_LAYOUT':
      return {
        ...state,
        layout: {
          ...state.layout,
          layoutId: action.layoutId,
          layoutItems: action.layoutItems
        }
      };
    // This case does not cause re-render in GridDashboard (which takes 'layout' to prevent unnecessary re-renders)
    case 'LAYOUT_UPDATED':
      state.layout.layoutItems = action.layoutItems;
      return {
        ...state,
        layout: state.layout
      };
    case 'ADD_NEW_ITEM':
      return {
        ...state,
        layout: {
          ...state.layout,
          layoutItems: [...state.layout.layoutItems, action.newItem]
        }
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        layout: {
          ...state.layout,
          layoutItems: state.layout.layoutItems.filter(
            (item) => item.i !== action.i
          )
        }
      };
    default:
      return state;
  }
};
