import React from 'react';
import styles from './Components/styles/App.module.css';
import Button from './Components/Button';


const App = () => {

  return (
    <div className={styles.container}>
      <h1 style={{marginBottom: '20px', fontSize: '3rem'}}>LOGO</h1>
      <Button content="Jogar"/>
      <Button content="Criar Quiz"/>
      <Button content="Quizzes"/>
    </div>
  );
};

export default App;

