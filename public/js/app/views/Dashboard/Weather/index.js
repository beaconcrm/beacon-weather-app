import { connect } from 'react-redux';
import { get } from 'lodash';

import { updatePerson } from 'actions/weather'; // alias to the `app/actions` folder


import Weather from './component';


const mapStateToProps = (state, ownProps) => {
  return {
    person: state.weather.person,
  };
};



// Pass action creators from the actions file as functions
// to the component
const mapDispatchToProps = {
  updatePerson,
};


const WeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);


export default WeatherContainer;
