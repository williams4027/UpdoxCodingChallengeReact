import React from "react";
import { connect } from "react-redux";
import { providersAddData } from "../actions/providers";
import ProviderData from "../model/ProviderData";

const mapDispatchToProps = dispatch => {
  return {
    providersAddData: (url, provider) => dispatch(providersAddData(url, provider))
  }
};

class ToDoFormComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      provider: new ProviderData()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { provider } = this.state;
    provider[event.target.id] = event.target.value;
    this.setState({ provider });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { provider } = this.state;
    this.props.providersAddData(provider);
    this.setState({ provider: new ProviderData() });
  }

  render() {
    const { provider } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            value={provider.first_name}
            onChange={this.handleChange}
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            value={provider.last_name}
            onChange={this.handleChange}
          />
          <label htmlFor="email_address">Email</label>
          <input
            type="email"
            className="form-control"
            id="email_address"
            value={provider.email_address}
            onChange={this.handleChange}
          />
          <label htmlFor="specialty">Specialty</label>
          <input
            type="text"
            className="form-control"
            id="specialty"
            value={provider.specialty}
            onChange={this.handleChange}
          />
          <label htmlFor="practice_name">Practice Name</label>
          <input
            type="text"
            className="form-control"
            id="practice_name"
            value={provider.practice_name}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const ToDoForm = connect(null, mapDispatchToProps)(ToDoFormComponent);

export default ToDoForm;
