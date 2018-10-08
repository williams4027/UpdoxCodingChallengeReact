import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './js/components/App';
import ProviderTable from './js/components/ProviderTable';
import configureStore from "./js/store/index";

import ProviderData from "./js/model/ProviderData";
import { providersTableToggleRow, providersRemove } from "./js/actions/providers";

configure({ adapter: new Adapter() });

it('>>>Initial React Test', () => {
  const initialState = {
    providers: [],
    providersTable: {
      selectedRows : []
    },
    providersForm: {
      currentProvider : new ProviderData()
    },
  };

  const store = configureStore(initialState);

  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('>>>Provider Table Tests',()=>{
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
  const mockStore = configureStore;

  let store,container
  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(
      <Provider store={store}>
        <ProviderTable />
      </Provider>,
      document.createElement('div')
    );
  })

  it('+++ render the provider table component', () => {
    expect(container.length).toEqual(1)
  });
});
