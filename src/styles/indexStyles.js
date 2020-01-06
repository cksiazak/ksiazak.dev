import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  navContainer: {
    width: '100%',
    height: '100%'
  },
  navigationList: {
    display: 'flex',
    justifyContent: 'space-evenly',
    listStyle: 'none',
    background: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'
  },
  navItem: {
    height: '100vh',
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 50px',
    textDecoration: 'none',
    background: '#0F0326',
    transition: '.4s',
    color: 'red',

    '&:hover': {
      background: 'transparent',
      color: '#0F0326',

      '& hr': {
        borderBottom: '3px solid #2A324B'
      }
    }
  },
  pageHeading: {
    fontSize: '4.5rem'
  },
  pageBreak: {
    display: 'block',
    border: 'none',
    borderBottom: '3px solid rgba(199, 204, 219, 0.5)',
    margin: '25px 0px',
    width: '40%',
    transition: '.4s'
  }
});
