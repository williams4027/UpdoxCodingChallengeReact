import React, { Component } from 'react';
import ProviderTable from './ProviderTable';
import ProviderForm from './ProviderForm';
import '../../css/App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="hero mask text-light jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Updox Provider Directory</h1>
            <p className="lead">v2.0</p>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 mb-5">
              <h2>Create Provider</h2>
              <ProviderForm />
            </div>
            <div className="col-lg-8">
              <h2>Provider List</h2>
              <ProviderTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
