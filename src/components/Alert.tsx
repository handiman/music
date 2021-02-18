import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(_ => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    top: 0,
    left: 0,
    zIndex: 1,
    display: 'table',
    '& > div': {
      display: 'table-cell',
      textAlign: 'center',
      verticalAlign: 'middle'
    }
  }
}));

export default (props: any) => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <div>
        {props.children}
      </div>
    </div>
  );
}