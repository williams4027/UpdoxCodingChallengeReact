import { PROVIDERS_ADD } from "../constants/action-types";

export function providers(state = [], action) {
  switch (action.type) {
    case PROVIDERS_ADD:
      return [...state, action.provider];
    default:
      return state;
  }
}
