import React, { Component } from 'react';
import ProviderTable from './ProviderTable';
import ProviderForm from './ProviderForm';
import '../../css/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2>Create Provider</h2>
            <ProviderForm />
          </div>
          <div className="col-md-4 offset-md-1">
            <h2>Provider List</h2>
            <ProviderTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
