import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';


const CardTitle = ({ children, className, classes }) => (
  <Typography
    variant="h6"
    className={classNames(classes.title, className)}
  >
    {children}
  </Typography>
);

const styles = theme => ({
  title: {
    fontSize: 18,
    fontWeight: 400,
    marginTop: 5,
    marginBottom: 15,
    color: theme.palette.text.primary,
  },
});

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default withStyles(styles)(CardTitle);
