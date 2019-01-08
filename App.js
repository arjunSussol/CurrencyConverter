import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Login from './src/js/components/Login';
import Home from './src/js/screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $darkgray: '#a9a9a9',
  $border: '#979797',
  $inputText: '#797979',
});

const App = () => <Home />;

export default App;
