import React, { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from "react-redux";
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

const App = ({ error, authError, showNotification, filter }) => {
  // const { onGetCurretnUser, showNotification } = useDispatch({
  //   // onGetCurretnUser: authOperations.getCurrentUser,
  //   showNotification: notificationActions.errorPopup,
  // });

  const notification = useSelector(state => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
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
      {notification.message && <div style={{ backgroundColor: 'red', color: '#fff', padding: '15px', position: 'absolute' }}>
        <span>
          <div
            // onClick={() => { showNotification({ message: '', error: '' }) }}
            onClick={dispatch(notificationActions.errorPopup({ message: '', error: '' }))}
          >
            X
          </div>
          {notification.message}
          {/* {notification.error} */}
        </span>
      </div>}
    </Container >
  );
};

// const mapStateToProps = state => {
//   // console.log(state.auth.error, state);
//   return {
//     notification: state.notification,
//   }
// };

// const mapDispatchToProps = {
//   showNotification: notificationActions.errorPopup,
// };

export default App;
// export default connect(mapStateToProps, null)(App);