import React, { useEffect, useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "./Sidebar.css";
import { toggleSideBar, setActiveItem } from '../../actions/sidebar';

import { MAX_MOBILE_WINDOW_WIDTH } from '../../constants';


const Sidebar = ({ isShown, isExpanded, menu, setActiveItem, toggleSideBar }) => {

  const { pathname } = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(pathname, width);

    if (isExpanded && width <= MAX_MOBILE_WINDOW_WIDTH) {
      toggleSideBar();
    }
    if (pathname) {
      if (pathname !== '') {
        setActiveItem(pathname);
      }
    }
  }, [pathname, width]);


  if (!isShown) {
    return (
      ''
    );
  }

  return (
    <nav id="sidebar" data-include="sidebar" className={`sidebar js-sidebar ${!isExpanded ? 'sidebar-hidden' : ''} `}>
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">Admin panel</span>
        </a>

        <ul className="sidebar-nav">
          {menu.map((item, key) => (
            <li key={key} className={`${item.is_section ? 'sidebar-header' : 'sidebar-item'} ${item.is_active ? 'active' : ''} `}>
              {item.is_section ? (
                <span className="align-middle">
                  {item.name}
                </span>
              ) : (
                <Link className="sidebar-link" to={item.route}>
                  {item.icon_tag}
                  <span className="align-middle">
                    {item.name}
                  </span>
                </Link>
              )}

            </li>
          ))}

        </ul>
      </div>
    </nav >
  )
}

Sidebar.propTypes = {
  isShown: PropTypes.bool,
  setActiveItem: PropTypes.func.isRequired,
  toggleSideBar: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isShown: state.sidebar.isShown,
  isExpanded: state.sidebar.isExpanded,
  menu: state.sidebar.menu
});



export default connect(mapStateToProps, { toggleSideBar, setActiveItem })(Sidebar);
