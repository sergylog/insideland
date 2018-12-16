import React from 'react';
import PropTypes from 'prop-types';
import classes from './Navigation.module.css';
import MainNav from './MainNav/MainNav';
import UserNav from './UserNav/UserNav';

const Navigation = ({ user, onLogIn, onLogOut }) => (
  <nav className={classes.Navigation}>
    <div className={classes.NavigationWrapper}>
      <MainNav user={user} />
      <UserNav user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
    </div>
  </nav>
);

Navigation.defaultProps = {
  user: null,
};

Navigation.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onLogIn: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default Navigation;
