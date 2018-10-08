import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import 'whatwg-fetch';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css'

import App from './js/components/App';
import * as serviceWorker from './serviceWorker';

import configureStore from "./js/store/index";

import ProviderData from "./js/model/ProviderData";

const initialState = {
  providers: [
    {"last_name": "Harris", "first_name": "Mike", "email_address": "mharris@updox.com", "specialty": "Pediatrics", "practice_name": "Harris Pediatrics"},
    {"last_name": "Wijoyo", "first_name": "Bimo", "email_address": "bwijoyo@updox.com", "specialty": "Podiatry", "practice_name": "Wijoyo Podiatry"},
    {"last_name": "Rose", "first_name": "Nate", "email_address": "nrose@updox.com", "specialty": "Surgery", "practice_name": "Rose Cutters"},
    {"last_name": "Carlson", "first_name": "Mike", "email_address": "mcarlson@updox.com", "specialty": "Orthopedics", "practice_name": "Carlson Orthopedics"},
    {"last_name": "Witting", "first_name": "Mike", "email_address": "mwitting@updox.com", "specialty": "Pediatrics", "practice_name": "Witting’s Well Kids Pediatrics"},
    {"last_name": "Juday", "first_name": "Tobin", "email_address": "tjuday@updox.com", "specialty": "General Medicine", "practice_name": "Juday Family Practice"},
  ],
  providersTable: {
      selectedRows : []
  },
  providersForm: {
      currentProvider : new ProviderData()
  },
};

const store = configureStore(initialState);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
