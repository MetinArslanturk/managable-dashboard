const gridLayoutDefaultState = {
  layout: { layoutId: '', layoutItems: [], canAdd: [] }
};

export default (state = gridLayoutDefaultState, action) => {
  switch (action.type) {
    case 'SET_LAYOUT':
      return {
        ...state,
        layout: {
          ...state.layout,
          layoutId: action.layoutId,
          layoutItems: action.layoutItems,
          canAdd: action.canAdd
        }
      };
    case 'SET_EMPTY_LAYOUT':
      return {
        ...gridLayoutDefaultState
      };
    // This case does not cause re-render in GridDashboard (which takes 'layout' to prevent unnecessary re-renders)
    case 'LAYOUT_UPDATED':
      action.layoutItems.forEach((item) => {
        const prevItem = state.layout.layoutItems.find(
          (it) => it.i === item.i
        );
        if (prevItem) {
          item.canRemove = prevItem.canRemove;
          item.type = prevItem.type;
        }
      });
      state.layout.layoutItems = action.layoutItems;
      return {
        ...state,
        layout: state.layout
      };
    case 'UPDATE_SINGLE_ITEM':
      return {
        ...state,
        layout: {
          ...state.layout,
          layoutItems: state.layout.layoutItems.map((item) => {
            if (item.i === action.newItem.i) {
              return action.newItem;
            }
            return item;
          })
        }
      };
    case 'ADD_NEW_ITEM':
      return {
        ...state,
        layout: {
          ...state.layout,
          layoutItems: [...state.layout.layoutItems, action.newItem]
        }
      };
    case 'UPDATE_CAN_ADD_IN_STORE':
      return {
        ...state,
        layout: {
          ...state.layout,
          canAdd: action.canAdd
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
