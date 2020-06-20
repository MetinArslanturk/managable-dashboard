const authDefaultState = {
  user: { _id: '' }
};

export default (state = authDefaultState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return {
        ...state,
        user: action.user
      };
    case 'UPDATE_MY_PROFILE':
      return {
        ...state,
        user: action.user
      };
    case 'SET_LOG_OUT':
      return {
        ...state,
        user: { _id: '' }
      };
    default:
      return state;
  }
};
