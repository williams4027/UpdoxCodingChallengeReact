import React, { Component } from "react";
import { connect } from "react-redux";

import { providersTableToggleRow, providersRemove } from "../actions/providers";
import ReactTable from "react-table";
import matchSorter from 'match-sorter'

const mapStateToProps = state => {
  return {
    providers: state.providers,
    selected: state.providersTable.selectedRows
  };
};

const mapDispatchToProps = dispatch => {
  return {
    providersTableToggleRow: (rowIndex) => dispatch(providersTableToggleRow(rowIndex)),
    providersRemove: (provider) => dispatch(providersRemove(provider)),
  }
};

class ProviderTableComponent extends Component {
  removeSelectedProviders(e) {
    for(let selectedIndex = 0; selectedIndex < this.props.selected.length; selectedIndex++) {
      let currentRowId = this.props.selected[selectedIndex];
      this.props.providersTableToggleRow(currentRowId);
      this.props.providersRemove(this.props.providers[currentRowId]);
    }
  }

  render() {
    const { providers, selected, providersTableToggleRow } = this.props;

    const columns = [{
      Header: 'First Name',
      accessor: 'first_name',
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["first_name"] }),
      filterAll: true
    }, {
      Header: 'Last Name',
      accessor: 'last_name',
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["last_name"] }),
      filterAll: true
    }, {
      Header: 'Email',
      accessor: 'email_address',
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["email_address"] }),
      filterAll: true
    }, {
      Header: 'Specialty',
      accessor: 'specialty',
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["specialty"] }),
      filterAll: true
    }, {
      Header: 'Practice',
      accessor: 'practice_name',
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["practice_name"] }),
      filterAll: true
    }];

    return (
      <div className="provider-table-wrapper">
        <button className="btn btn-danger mt-4" onClick={(e) => this.removeSelectedProviders(e)}>Remove All Selected Providers</button>
        <ReactTable
          className="provider-table mt-4"
          data={providers}
          columns={columns}
          minRows="5"
          filterable
          getTrProps={(state, rowInfo) => {
              if (rowInfo && rowInfo.row) {
                let displaySelectedRow = selected && Object.values(selected).indexOf(rowInfo.index) > -1;
                return {
                  onClick: (e) => {
                    providersTableToggleRow(rowInfo.index);
                  },
                  style: {
                    background: displaySelectedRow ? '#00afec' : 'white',
                    color: displaySelectedRow ? 'white' : 'black'
                  }
                }
              } else {
                return {}
              }
            }
          }
        />
      </div>
    );
  }
};

const ProviderTable = connect(mapStateToProps, mapDispatchToProps)(ProviderTableComponent);
export default ProviderTable;
