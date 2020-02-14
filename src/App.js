import React from 'react';
import './App.css';
import Table from './Table';
import Sidebar from './Sidebar';
import Loginform from './Loginform';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './Landingpage';

function App() {
  return (
    <Switch>
      <div>
        <Route exact path="/">
          <Landingpage />
        </Route>
        <Route path="/login">
          <Loginform />
        </Route>
        <Route path="/home">
          <Switch>
            <div className="main-homepage">
              <div className="homepage-sidebar">
                <Sidebar />
              </div>
              <div className="homepage-main">
                <div className="homepage-header">Realtime Dashboard</div>
                <div className="homepage-table">
                  <Route exact path="/home">
                    <Table />
                  </Route>
                  <Route path="/home/hello">
                    <p>hello</p>
                  </Route>
                </div>
              </div>
            </div>
          </Switch>
        </Route>
      </div>
    </Switch>
  );
}

export default App;
