import {
  assignIn,
} from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import CloudIcon from '@material-ui/icons/Cloud';

import CardTitle from 'components/CardTitle';

import getPostcodeInfo from './getPostcodeInfo';
import getWeatherAtCoordinates from './getWeatherAtCoordinates';
import isValidPostcode from './isValidPostcode';


class Weather extends Component {

  handlePersonFieldChange(key) {
    return (e) => {
      const { person, updatePerson } = this.props;

      const newPerson = assignIn({}, person, {
        [key]: e.target.value,
      });

      updatePerson(newPerson);

    };
  }

  render() {
    const {
      person,
      classes,
    } = this.props;

    return (
      <div>

        <Grid container spacing={3}>

          <Grid item xs={8}>

            <Card>
              <CardContent>

                <CardTitle>
                  <PersonIcon className={classes.cardTitleIcon} />
                  Contact details
                </CardTitle>


                <TextField
                  variant="outlined"
                  label="First name"
                  margin="normal"
                  value={person.first_name}
                  onChange={this.handlePersonFieldChange('first_name')}
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  label="Last name"
                  margin="normal"
                  value={person.last_name}
                  onChange={this.handlePersonFieldChange('last_name')}
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  label="Address line 1"
                  margin="normal"
                  value={person.address_line_1}
                  onChange={this.handlePersonFieldChange('address_line_1')}
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  label="Postcode"
                  margin="normal"
                  value={person.postal_code}
                  onChange={this.handlePersonFieldChange('postal_code')}
                  fullWidth
                />

              </CardContent>
            </Card>

          </Grid>


          <Grid item xs={4}>

            <Card>
              <CardContent>

                <CardTitle>
                  <CloudIcon className={classes.cardTitleIcon} />
                  Weather
                </CardTitle>

                {/*
                  Here is where you need to edit!
                  Feel free to split your rendering out into a sub component if you like.
                */}
                <CircularProgress />

              </CardContent>
            </Card>

          </Grid>

        </Grid>

      </div>
    );
  }

}


const styles = theme => ({
  cardTitleIcon: {
    display: 'inline',
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
});

Weather.propTypes = {
  updatePerson: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired,
};

export default withStyles(styles)(Weather);
