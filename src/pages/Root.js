import React, { Component, } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Homepage from '../pages/homepage';
import Profile from '../pages/profile';
class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
