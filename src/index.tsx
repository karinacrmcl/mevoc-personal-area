import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ActiveListsProvider from './providers/ActiveListsProvider';
import ModalProvider from './providers/ModalContextProvider';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    {/* eslint-disable-next-line */}
    {/* @ts-ignore */}
    <BrowserRouter>
      <ModalProvider>
        <ActiveListsProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ActiveListsProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
