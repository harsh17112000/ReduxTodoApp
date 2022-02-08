import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import ContextProvider from "./component/context/ContextProvider"

ReactDOM.render(
  <ContextProvider>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  </ContextProvider>,
  document.getElementById('root')
);

