import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key='login'
        component={LogIn}
        title='Welcome To DiveBuddy!!'
        initial
      />
    </Router>
  );
};

export default RouterComponent;
