import {
  assign,
  assignIn,
  includes,
  reject,
} from 'lodash';
import {
  PERSON_UPDATED,
} from 'constants/weather';

const defaultState = {
  person: {
    first_name: 'John',
    last_name: 'Smith',
    address_line_1: '154-158 Shoreditch High St',
    postal_code: 'E1 6HU',
  },
};


export default function (state = defaultState, action) {

  switch (action.type) {

    case PERSON_UPDATED: {
      return assignIn({}, state, {
        person: action.person,
      });
    }

    default:
      return state;

  }
}
