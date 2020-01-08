import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0px 0px',
    width: '100%',
    background: '#10294C'
  }
});

const PageContainer = props => {
  const { pageWrapper } = useStyles();
  return <div className={pageWrapper}>{props.children}</div>;
};

export default PageContainer;
