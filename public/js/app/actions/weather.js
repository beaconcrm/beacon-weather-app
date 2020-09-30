import {
  PERSON_UPDATED,
} from 'constants/weather';


export const updatePerson = newPerson => ({
  type: PERSON_UPDATED,
  person: newPerson,
});

