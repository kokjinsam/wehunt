// @flow

import {
  TODO_SAVED,
  TODO_SAVING,
  TODO_CHECKED,
  TODO_CHECKING,
} from '../actions/types';

type defaultStateType = {
  saving: boolean,
  checking: boolean,
};

type actionType = {
  type: string,
};

const defaultState = {
  saving: false,
  checking: false,
};

function todosReducer(state: defaultStateType = defaultState, action: actionType) {
  switch (action.type) {
    case TODO_SAVED:
      return {
        ...state,
        saving: false,
      };
    case TODO_SAVING:
      return {
        ...state,
        saving: true,
      };
    case TODO_CHECKING:
      return {
        ...state,
        checking: true,
      };
    case TODO_CHECKED:
      return {
        ...state,
        checking: false,
      };
    default:
      return state;
  }
}


export default todosReducer;
