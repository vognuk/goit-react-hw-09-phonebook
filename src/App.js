import React, { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom'
import { authOperations } from './redux/auth'
import ContactsView from './views/ContactsView'
import AppBar from './components/AppBar'
// import Container from './components/Container'
import routes from './routes/routes'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import { notificationActions } from './redux/notification'
import { ThemeProvider } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'

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

  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}> {/*fallback={<Preloader />}>*/}
        <Switch>
          <Route
            exact
            // redirectTo='/'
            path={routes.homeView}
            component={HomeView} />
          <PublicRoute
            restricted
            redirectTo='/login'
            path={routes.loginPage}
            component={LoginView}
          />
          <PublicRoute
            restricted
            redirectTo='/register'
            path={routes.registerPage}
            component={RegisterView}
          />
          <PrivateRoute
            redirectTo='/contacts'
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
      {/* </Container > */}
    </ThemeProvider>
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