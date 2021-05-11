import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER, USER_SELECTED} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  userSelected: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
      case USER_SELECTED:
        return {
          ...state,
          userSelected: !isEmpty(action.payload),
          userData: action.payload
        };
    default:
      return state;
  }
}
