import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x


const textPrimary = 'rgba(0, 0, 0, 0.87)';

const v1Theme = createMuiTheme({

  palette: {
    primary: {
      light: '#ffe974',
      main: '#F5B743',
      dark: '#be8705',
      contrastText: '#fff',
    },
    secondary: {
      light: '#315464',
      main: '#012b3a',
      dark: '#000015',
      contrastText: '#fff',
    },
    text: {
      primary: textPrimary,
    },
  },

  props: {

    // allow intercom messenger to be typed in when a modal is open
    // note we should be able to use MuiModal here but there is a bug
    // that prevents it
    MuiDialog: {
      disableEnforceFocus: true,
    },
    MuiDrawer: {
      ModalProps: {
        disableEnforceFocus: true,
      },
    },

  },

  overrides: {

    MuiCard: {
      root: {
        marginBottom: 25,
      },
      // .MuiCardContent-root-168:last-child
    },

    MuiPaper: {
      root: {
        color: '#5e5e5e',
        fontSize: '1rem',
      },

      // let's chill out on the shadows this isn't a cave
      elevation2: {
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
      },
    },

    MuiTypography: {
      h5: {
        fontSize: 16,
        color: '#777',
        margin: 0,
        fontWeight: 500,
        textTransform: 'uppercase',
        padding: '0 22px',
        marginBottom: 25,
        position: 'relative',
        display: 'inline-block',
      },
      h6: {
        color: textPrimary, // theme.palette.text.primary
      },
      caption: {
        fontSize: '0.85rem',
        fontWeight: 500,
        letterSpacing: 'inherit',
      },
      subtitle1: {
        marginBottom: 15,
        lineHeight: 1.5,
      },
    },

    MuiAccordionSummary: {
      root: {
        color: textPrimary,
      },
    },

    // MuiChip: {
    //   avatar: {
    //     marginLeft: '0px !important', // needed to override combined class
    //   },
    // },

    MuiInput: {
      // make the hover underline not black! that's ugly
      underline: {
        '&:hover:not($disabled):not($focused):before': {
          borderBottom: '2px solid rgba(0, 0, 0, 0.6) !important',
          height: 2,
        },
      },
    },

    MuiDialogTitle: {
      root: {
        fontSize: 20,
      },
    },

    // make tooltips bigger and more helpful
    MuiTooltip: {
      popper: {
        maxWidth: 280,
      },
      tooltip: {
        fontSize: '0.95rem',
        padding: 10,
      },
    },

  },
});

const Theme = ({ children }) => (
  <MuiThemeProvider theme={v1Theme}>
    {children}
  </MuiThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
