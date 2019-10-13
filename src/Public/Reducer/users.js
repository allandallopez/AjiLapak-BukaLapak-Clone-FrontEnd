const initState = {
  usersProfile: {},
  errMessage: '',
  message: '',
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  isLogin: false,
};

const users = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLogin: true,
        token: action.payload,
      };
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    case 'FORGOT_PASSWORD_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'FORGOT_PASSWORD_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case 'FORGOT_PASSWORD_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    case 'OTP_VERIFY_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'OTP_VERIFY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case 'OTP_VERIFY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };

    case 'RESET_PASSWORD_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'RESET_PASSWORD_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case 'RESET_PASSWORD_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };

    case 'GET_ACCOUNT_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_ACCOUNT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case 'GET_ACCOUNT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        data: action.payload.data.data,
        isLogin: true,
      };
    case 'LOGOUT': {
      return {
        initState
      };
    }
   // case 'GET_PROFILE_PENDING':
   //     return{
   //         ...state,
   //         isLoading:true,
   //         isRejected:false,
   //         isFulfilled:false
   //     }
   // case 'GET_PROFILE_REJECTED':
   //     return{
   //         ...state,
   //         isLoading:false,
   //         isRejected:true,
   //         errMessage:action.payload.response.data.message
   //     }
   // case 'GET_PROFILE_FULFILLED':
   //     return{
   //         ...state,
   //         isLoading:false,
   //         isFulfilled:true,
   //         usersProfile: action.payload.data.data
   //     }
    default:
      return state;
  }
};

export default users;
