/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { toggleProfile } from '../../actions/navbar';
import { toggleSideBar } from '../../actions/sidebar';

const Navbar = ({ auth: { isAuthenticated, loading }, navbar: { isShown: isNavbarShown, isProfileOpen: isProfileShown }, toggleProfile, toggleSideBar, logout }) => {

  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles"> Developers </Link>
      </li>
      <li>
        <Link to="/posts"> Posts </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i classNameName="fas fa-user"></i>{' '}
          <span classNameName="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i classNameName="fas fa-sign-out-alt"></i>{' '}
          <span classNameName="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  const { pathname } = useLocation();

  const onClickHamburger = () => {
    toggleSideBar();
  }

  const onClickProfile = () => {
    toggleProfile();
  }

  if ((pathname !== '/register' || pathname === 'register')) {
    if (!isAuthenticated) {
      console.log(pathname);
      return <Redirect to="/login" />;
      // return ('');
    }

  }

  if (!isNavbarShown) {
    return (<nav>1</nav>);
  }

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg" data-include="top">
      <a className="sidebar-toggle js-sidebar-toggle" onClick={onClickHamburger}>
        <i className="hamburger align-self-center"></i>
      </a>

      <div className="search w-50">
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Umumiy qidiruv" aria-label="Recipient's username"
            aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Izla</button>
        </div>
      </div>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
              <div className="position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell align-middle"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                <span className="indicator">4</span>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
              <div className="dropdown-menu-header">
                4 New Notifications
              </div>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-danger" data-feather="alert-circle"></i>
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Update completed</div>
                      <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                      <div className="text-muted small mt-1">30m ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-warning" data-feather="bell"></i>
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Lorem ipsum</div>
                      <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                      <div className="text-muted small mt-1">2h ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-primary" data-feather="home"></i>
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Login from 192.186.1.8</div>
                      <div className="text-muted small mt-1">5h ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-success" data-feather="user-plus"></i>
                    </div>
                    <div className="col-10">
                      <div className="text-dark">New connection</div>
                      <div className="text-muted small mt-1">Christina accepted your request.</div>
                      <div className="text-muted small mt-1">14h ago</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dropdown-menu-footer">
                <a href="#" className="text-muted">Show all notifications</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
              <i className="align-middle" data-feather="settings"></i>
            </a>

            <a className="nav-link dropdown-toggle d-none d-sm-inline-block show" href="#" data-bs-toggle="dropdown" onClick={onClickProfile}>
              <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span
                className="text-dark">
                Charles Hall
              </span>
            </a>
            {isProfileShown ? (<div className="dropdown-menu dropdown-menu-end show" data-bs-popper="none">
              <a className="dropdown-item" href="pages-profile.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user align-middle me-1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Profile
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={logout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out align-middle me-1"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                Chiqish
              </a>
            </div>) :
              ('')}
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  navbar: state.navbar,
});

export default connect(mapStateToProps, { logout, toggleProfile, toggleSideBar })(Navbar);
