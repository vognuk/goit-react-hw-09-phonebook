import React, { useEffect, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { authOperations } from './redux/auth'
import ContactsView from './views/ContactsView'
import AppBar from './components/AppBar'
import Container from './components/Container'
import routes from './routes/routes'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

import { notificationActions } from './redux/notification'

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
// const ContactsView = lazy(() => import('./views/ContactsView'));

const App = ({ onGetCurretnUser, filter, notification, showNotification }) => {
  useEffect(() => {
    onGetCurretnUser();
  },
    []
  );

  // useEffect(() => {
  //   console.log("Нотификация работает", notification.massage);
  // },
  //   [notification.massage]
  // );

  // const filterContacts = e => {
  //   filter(e.target.value);
  // };

  return (
    <Container maxWidth="sm">
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}> {/*fallback={<Preloader />}>*/}
        <Switch>
          <Route
            exact
            path={routes.homeView}
            component={HomeView} />
          <PublicRoute
            restricted
            redirectTo='/contacts'
            path={routes.loginPage}
            component={LoginView}
          />
          <PublicRoute
            restricted
            redirectTo='/contacts'
            path={routes.registerPage}
            component={RegisterView}
          />
          <PrivateRoute
            path={routes.contactsPage}
            component={ContactsView}
          />
          <Redirect to={routes.homeView} />
        </Switch>
      </Suspense>
      {notification.massage && <div style={{ backgroundColor: 'red', color: '#fff', padding: '15px', position: 'absolute' }}>
        <span>
          <div
            onClick={() => { showNotification({ massage: '', error: '' }) }}
          >X</div>
          {notification.massage}
        </span>
      </div>}
    </Container>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    notification: state.notification,
  }
};

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
  showNotification: notificationActions.errorPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
