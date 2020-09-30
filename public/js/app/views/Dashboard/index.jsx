/*
* A component wrapper for all logged in dashboard views
*/
import { isEqual, includes } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles } from '@material-ui/core/styles';

import Weather from './Weather';


class Dashboard extends Component {

  render() {
    const {
      classes,
    } = this.props;

    return (
      <div>

        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawer,
          }}
          anchor="left"
        >

          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button selected>
              <ListItemIcon>
                <WbSunnyIcon />
              </ListItemIcon>
              <ListItemText primary="Weather" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>

        </Drawer>

        <div className={classes.content}>
          <Weather />
        </div>

      </div>
    );
  }

}

const styles = theme => ({
  drawer: {
    width: 300,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginLeft: 300,
  }
});

Dashboard.propTypes = {

};

export default withStyles(styles)(Dashboard);
