import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  hamburger: {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      cursor: 'pointer'
    },
    '& .line': {
      width: '30px',
      height: '5px',
      backgroundColor: 'black',
      display: 'block',
      margin: '8px auto',
      transition: 'all 0.3s ease-in-out'
    }
  },
  isActive: {
    transform: 'rotate(45deg)',
    '& .line': {
      width: '30px',
      '&:nth-child(2)': {
        opacity: '0'
      },
      '&:nth-child(1)': {
        transform: 'translateY(13px)'
      },
      '&:nth-child(3)': {
        transform: 'translateY(-13px) rotate(90deg)'
      }
    }
  }
});

const HamburgerMenu = ({
  hamburgerHelper,
  hamburgerOpen,
  hamburgerHelperKey
}) => {
  const { hamburger, isActive } = useStyles();

  return (
    <div
      className={!hamburgerOpen ? hamburger : `${hamburger} ${isActive}`}
      onClick={hamburgerHelper}
      onKeyDown={hamburgerHelperKey}
      role='button'
      tabIndex='0'
    >
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
    </div>
  );
};

export default HamburgerMenu;
