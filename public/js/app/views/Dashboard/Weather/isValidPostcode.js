/*
* Check to see if a UK postcode is valid. Must be formatted correctly.
*/
import { isString } from 'lodash';

export default (postcode) => {

  if (!isString(postcode)) {
    return false;
  }

  const expression = '^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$';
  const re = new RegExp(expression);

  return re.test(postcode);

};
