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

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
// const ContactsView = lazy(() => import('./views/ContactsView'));

const App = ({ onGetCurretnUser, filter }) => {
  useEffect(() => {
    onGetCurretnUser();
  },
    []
  );

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
    </Container>
  );
};

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
