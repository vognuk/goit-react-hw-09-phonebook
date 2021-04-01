import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store'
// import 'react-notifications/lib/notifications.css';
// import 'fontsource-roboto';
// import 'modern-normalize/modern-normalize.css';
// import './styles/base.scss';
import { StylesProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
