import setCookie from './setCookie';

export default (name) => {
  setCookie(name, '', -1);
};
