import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '../routing/PrivateRoute';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
// import CreateProfile from '../profile-forms/CreateProfile';
// import Profile from '../profile/Profile';
// import Profiles from '../profiles/Profiles';
// import EditProfile from '../profile-forms/EditProfile';
// import AddEducation from '../profile-forms/AddEducation';
// import AddExperience from '../profile-forms/AddExperience';
// import Posts from '../posts/Posts';
import Users from '../users/Users';
// import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import Navbar from '../layout/Navbar';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Routes = ({ toggleSideBar, sidebar: { isExpanded: isShown } }) => {

  return (
    <div className="main">
      <Alert />
      <Navbar />
      <div className={`content ${isShown ? 'is-expanded' : ''}`}>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} toggleSideBar={toggleSideBar} />

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/users" component={Users} />

          {/* <PrivateRoute exact path="/users/:id" component={User} /> */}
          <Route component={NotFound} />
        </Switch>

      </div>
    </div >
  );
};
Routes.propTypes = {
  auth: PropTypes.object.isRequired,
  sidebar: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  sidebar: state.sidebar,
});


export default connect(mapStateToProps, {})(
  Routes
);
