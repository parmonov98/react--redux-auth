import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routing/Routes';

// Components
import Sidebar from './components/layout/Sidebar';
import Landing from './components/layout/Landing';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// import './App.css';
import './app.css';



if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  // const [showSidebar, setShowSidebar] = React.useState();

  // const handleToggleSideBar = () => {
  //   //togglesidebar with useState
  //   setShowSidebar(!showSidebar);
  // }

  return (
    <Provider store={store}>
      <Router>
        <Fragment>

          <Sidebar />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
