import React from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../hoc/Layout/Layout';
import Main from '../containers/Main/Main';
import Catalog from '../containers/Catalog/Catalog';
import Constructor from '../containers/Constructor/Constructor';
import SignUp from '../containers/SignUp/SignUp';
import SignIn from '../containers/SignIn/SignIn';

const Container = ({ user }) => (
  <Layout>
    {user
      ? (
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Main} />
          <Redirect from={`${process.env.PUBLIC_URL}/catalog`} exact to={`${process.env.PUBLIC_URL}/catalog/companies`} />
          <Route path={`${process.env.PUBLIC_URL}/catalog/`} component={Catalog} />
          <Redirect from={`${process.env.PUBLIC_URL}/constructor`} exact to={`${process.env.PUBLIC_URL}/constructor/companies`} />
          <Route path={`${process.env.PUBLIC_URL}/constructor`} component={Constructor} />
          <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp} />
          <Route path={`${process.env.PUBLIC_URL}/sign-in`} component={SignIn} />
        </Switch>
      ) : null}
  </Layout>
);

Container.defaultProps = {
  user: null,
};

Container.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Container);
