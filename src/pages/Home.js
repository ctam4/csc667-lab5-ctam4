import React from 'react';
import { connect } from 'react-redux';

const Home = ({ user, isLoggedIn }) => {
  return (
    <div>
      <h2>Home</h2>
      {isLoggedIn && (
        <div>
          <p>{ `Welcome, ${user}!` }</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps)(Home);
