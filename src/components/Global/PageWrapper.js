import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 0px',
    width: '100%',
    background: 'white'
  }
});

const PageContainer = props => {
  const { pageWrapper } = useStyles();
  return <div className={pageWrapper}>{props.children}</div>;
};

export default PageContainer;
