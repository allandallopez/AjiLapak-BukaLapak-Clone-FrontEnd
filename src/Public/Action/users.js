import axios from 'axios';

export const login = data => {
  return {
    type: 'LOGIN',
    payload: axios.post('/login', data),
  };
};

export const register = data => {
  return {
    type: 'REGISTER',
    payload: axios.post('/register', data),
  };
};

export const forgotPassword = data => {
  return {
    type: 'FORGOT_PASSWORD',
    payload: axios.post('/forgot', data),
  };
};

export const otpVerify = data => {
  return {
    type: 'OTP_VERIFY',
    payload: axios.post('/cekotp', data),
  };
};

export const resetPassword = data => {
  return {
    type: 'RESET_PASSWORD',
    payload: axios.post('/updatepassword', data),
  };
};

export const getAccount = token => {
  return {
    type: 'GET_ACCOUNT',
    payload: axios.get(`/users`, {
      headers: {
          authorization : token
      }
  })
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: ''
  };
};
