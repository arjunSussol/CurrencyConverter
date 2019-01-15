import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Login from './src/js/components/Login';
import CurrencyList from './src/js/screens/CurrencyList';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $darkgray: '#a9a9a9',
  $border: '#979797',
  $inputText: '#797979',
});

const App = () => <CurrencyList />;

export default App;
