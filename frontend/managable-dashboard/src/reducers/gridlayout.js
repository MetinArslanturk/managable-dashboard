const gridLayoutDefaultState = {
  layoutItems: []
};

export default (state = gridLayoutDefaultState, action) => {
  switch (action.type) {
    case 'SET_LAYOUT':
      return {
        ...state,
        layoutItems: action.layoutItems
      };
    case 'ADD_NEW_ITEM':
      return {
        ...state,
        layoutItems: [...state.layoutItems, action.newItem]
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        layoutItems: state.layoutItems.filter(
          (item) => item.i !== action.key
        )
      };
    default:
      return state;
  }
};
