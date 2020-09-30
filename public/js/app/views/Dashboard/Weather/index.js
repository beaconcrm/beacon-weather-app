import { connect } from 'react-redux';
import { get } from 'lodash';
import { createSelector } from 'reselect';

import { updatePerson } from 'actions/weather'; // alias to the `app/actions` folder


import Weather from './component';


const getLocation = (state, props) => props.location;

const selector = createSelector([

  // access from the global redux state here
  (state, props) => {
    return state.weather.person;
  },

], (person) => {

  // and pass the variables as props to add in here
  return {
    person,
  };

});


// Pass action creators from the actions file as functions
// to the component
const mapDispatchToProps = {
  updatePerson,
};


const WeatherContainer = connect(
  selector,
  mapDispatchToProps,
)(Weather);


export default WeatherContainer;
