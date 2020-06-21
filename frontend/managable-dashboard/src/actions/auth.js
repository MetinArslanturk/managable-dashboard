import * as authService from '../services/auth';

export const login = (email, password) => ({
  type: 'START_LOGIN',
  payload: { email, password }
});

export const logout = () => {
  authService.logout();
  return { type: 'SET_LOG_OUT' };
};
