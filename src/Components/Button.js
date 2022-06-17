import React from 'react';
import styles from './styles/Button.module.css';

const Button = ({content}) => {
  return (
    <button className={styles.whiteButton}>{content}</button>
  );
};

export default Button;