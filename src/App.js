import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { initializeApp } from './state/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

import './App.css';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs"
            render={withSuspense(DialogsContainer)
            } />
          <Route path="/profile/:userId?"
            render={withSuspense(ProfileContainer)
            } />
          <Route path="/news"
            render={() => <News />} />
          <Route path="/users"
            render={() => <UsersContainer />} />
          <Route path="/login"
            render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);