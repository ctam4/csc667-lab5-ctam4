const INITIAL_STATE = {
  user: '',
  password: '',
  isLoggedIn: false,
  loadingState: 'init',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'USER_SET_PASSWORD':
      return {
        ...state,
        password: action.password,
      };
    case 'USER_SET_ISLOGGEDIN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case 'USER_SET_LOADINGSTATE':
      return {
        ...state,
        loadingState: action.loadingState,
      };
    default:
      return state;
  }
};

export default userReducer;
