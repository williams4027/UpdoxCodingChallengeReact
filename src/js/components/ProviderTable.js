import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import matchSorter from 'match-sorter'

const mapStateToProps = state => {
  return { providers: state.providers };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class ProviderTableComponent extends Component {
  render() {
    const { providers } = this.props;

    const columns = [{
      Header: 'First Name',
      accessor: 'first_name',
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["first_name"] }),
      filterAll: true
    }, {
      Header: 'Last Name',
      accessor: 'last_name'
    }];

    return (
      <ReactTable
        data={providers}
        columns={columns}
        minRows="0"
      />
    );
  }
};

const ProviderTable = connect(mapStateToProps, mapDispatchToProps)(ProviderTableComponent);
export default ProviderTable;
