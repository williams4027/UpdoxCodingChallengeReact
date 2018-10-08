import { PROVIDERS_ADD, PROVIDERS_REMOVE, PROVIDERS_TABLE_TOGGLE_ROW, PROVIDERS_FORM_UPDATE } from "../constants/action-types";

export function providers(state = [], action) {
  switch (action.type) {
    case PROVIDERS_ADD:
      return [...state, action.provider];
    case PROVIDERS_REMOVE:
      if (Object.values(state).indexOf(action.provider) > -1) {
        let spliceIndex = Object.values(state).indexOf(action.provider);
        return [
          ...state.slice(0, spliceIndex),
          ...state.slice(spliceIndex + 1),
        ];
      }
      return [...state, action.provider];
    default:
      return state;
  }
}

export function providersTable(state = [], action) {
  switch (action.type) {
    case PROVIDERS_TABLE_TOGGLE_ROW:
      // Remove selection
      if (state.selectedRows && Object.values(state.selectedRows).indexOf(action.rowIndex) > -1) {
        let spliceIndex = Object.values(state.selectedRows).indexOf(action.rowIndex);
        return {
            ...state,
            selectedRows: [
                ...state.selectedRows.slice(0, spliceIndex),
                ...state.selectedRows.slice(spliceIndex + 1),
            ]
        };
      } else {
        // Add selection
        return {
            ...state,
            selectedRows: [
                ...state.selectedRows,
                action.rowIndex
            ]
        };
      }
    default:
      return state;
  }
}

export function providersForm(state = {}, action) {
  switch (action.type) {
    case PROVIDERS_FORM_UPDATE:
      return {
          ...state,
          currentProvider: action.newProvider
      };
    default:
      return state;
  }
}
