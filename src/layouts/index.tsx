import React, { Fragment } from 'react';
// import styles from './index.css';

const BasicLayout: React.FC = props => {
  // return (
  //   <div className={styles.normal}>
  //     <h1 className={styles.title}>Yay! Welcome to umi!</h1>
  //     {props.children}
  //   </div>
  // );
  return <Fragment>{props.children}</Fragment>;
};

export default BasicLayout;
