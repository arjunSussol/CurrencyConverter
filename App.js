import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Login from './src/js/components/Login';
import Home from './src/js/screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
});

const App = () => <Home />;

export default App;
