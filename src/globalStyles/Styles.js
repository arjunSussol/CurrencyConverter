import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 250,
      height: 45,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      flex: 1
    },
    inputIcon: {
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center',
      backgroundColor: '#DCDCDC',
    },
    buttonContainer: {
        marginBottom: 20,
        width: 250,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    disabledContainer: {
      marginBottom: 20,
      width: 250,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: '#a8aaac'
  },
    loginButton: {
      backgroundColor: "#00b5ec"
    },
    loginText: {
      color: 'white'
    },
  });

  module.exports = styles;