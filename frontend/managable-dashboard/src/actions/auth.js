export const login = (email, password) => ({
  type: 'START_LOGIN',
  payload: { email, password }
});

export const logout = () => ({
  type: 'SET_LOG_OUT'
});
