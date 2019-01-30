import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Login from './src/js/components/Login';
import Options from './src/js/screens/Options';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $darkgray: '#a9a9a9',
  $border: '#979797',
  $inputText: '#797979',
  $darkText: '#343434',
});

const App = () => <Options />;

export default App;
