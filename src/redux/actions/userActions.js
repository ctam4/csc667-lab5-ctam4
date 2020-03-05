export const setUser = user => ({
  type: 'USER_SET_USER',
  user,
});

// setUser('hello') => { type: 'USER_SET_USER', user: 'hello' }

export const setPassword = password => ({
  type: 'USER_SET_PASSWORD',
  password,
});

export const setIsLoggedIn = isLoggedIn => ({
  type: 'USER_SET_ISLOGGEDIN',
  isLoggedIn,
});

export const setLoadingState = loadingState => ({
  type: 'USER_SET_LOADINGSTATE',
  loadingState,
});
