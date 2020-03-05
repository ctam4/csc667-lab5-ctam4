import React from 'react';
import { connect } from 'react-redux';
import { setUser, setPassword, setIsLoggedIn, setLoadingState } from '../redux/actions/userActions';
import { Redirect } from 'react-router';

const Login = ({
  user,
  password,
  isLoggedIn,
  loadingState,
  dispatch,
}) => {
  //const [user, setUser] = React.useState('');
  const logIn = () => {
    dispatch(setLoadingState('loading'));
    setTimeout(() => { // network call would be here (axios or fetch)
      // fake doing something on the server
      if (user === 'calvin' && password === '456') {
        dispatch(setIsLoggedIn(true));
        dispatch(setLoadingState('init'));
      }
      dispatch(setLoadingState('error'));
    }, 1000);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (loadingState === 'loading') {
    return <h2>Loading...</h2>;
  }

  return (
    <form onSubmit={logIn}>
      <h2>Login</h2>
      <div>
        {/* this is a comment*/}
        <label>User</label>
        <input
          required
          placeholder="User"
          value={user}
          onChange={e => dispatch(setUser(e.target.value))}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => dispatch(setPassword(e.target.value))}
        />
      </div>
      <div>
        {loadingState === 'error' && alert('User name or password incorrect') & dispatch(setLoadingState('init')) }
        <button>Log In</button>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  // this map react props to redux state
  return {
    user: state.userReducer.user,
    password: state.userReducer.password,
    isLoggedIn: state.userReducer.isLoggedIn,
    loadingState: state.userReducer.loadingState,
  };
};

export default connect(mapStateToProps)(Login);
