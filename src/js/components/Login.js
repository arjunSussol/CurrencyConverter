/**
 * Tabbing via Input fields reference: https://thekevinscott.com/tabbing-through-input-fields/
 */

import React, { Component } from 'react';
import {
  TextInput, View, Text, Image, TouchableOpacity,
} from 'react-native';

import { RequestAuth } from '../api';
import styles from '../../globalStyles/Styles';
import { validateStrings } from '../validateStrings';
import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.passwordRef = null;
  }

  get canAttemptSubmit() {
    const { username, password } = this.state;
    return (
      username.length > 0 && password.length > 0
    );
  }

  /**
 * Since RequestAuth(username, password) is a promise, you should be able to obtain
 * the data either in a .then block or async await as reference below:
 *
 * // https://stackoverflow.com/questions/45200723/react-native-async-function-returns-promise-but-not-my-json-data
 */

doAuth = async () => {
  const { username, password } = this.state;

  try {
    if (username.length === 0) throw new Error(validateStrings.username.required);
    if (this.textContainsSpaces(username)) throw new Error(validateStrings.username.containsSpaces);
    if (password.length === 0) throw new Error(validateStrings.password.required);
    if (this.textLengthInvalid(password)) throw new Error(validateStrings.password.lengthInvalid);
    if (this.textContainsSpaces(password)) throw new Error(validateStrings.password.containsSpaces);

    const responseData = await RequestAuth(username, password);
    if (!responseData.error) {
      this.setState({
        username: responseData.store,
        password: responseData.name,
        error: '',
      });
    } else {
      throw new Error(responseData.error);
    }
  } catch (err) {
    this.setState({ error: err.message });
  }
}

textContainsSpaces = (text) => {
  const reg = /^\S*$/;
  return !(reg.test(text));
}

textLengthInvalid = (text, lessThen = 8, greaterThen = 32) => text.length < lessThen || text.length > greaterThen

handleOnChangeUsername = (text) => {
  this.setState({ username: text });
}

handleOnChangePassword = (text) => {
  this.setState({ password: text });
}

render() {
  const { username, password, error } = this.state;

  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>
        {error}
      </Text>
      <View style={styles.inputContainer}>

        <Image style={styles.inputIcon} source={usernameImg} />
        <TextInput
          autoFocus
          selectTextOnFocus
          style={styles.inputs}
          placeholder="Username"
          value={username}
          underlineColorAndroid={username === '' ? 'red' : 'transparent'}
          onChangeText={this.handleOnChangeUsername}
          returnKeyType="next"
          onSubmitEditing={() => { if (this.passwordRef) this.passwordRef.focus(); }}
          blurOnSubmit={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={passwordImg} />
        <TextInput
          secureTextEntry
          selectTextOnFocus
          style={styles.inputs}
          placeholder="Password"
          underlineColorAndroid={password === '' ? 'red' : 'transparent'}
          value={password}
          onChangeText={this.handleOnChangePassword}
          ref={reference => (this.passwordRef = reference)}
          returnKeyType="done"
          onSubmitEditing={() => {
            if (this.passwordRef) this.passwordRef.blur();
          }}
        />
      </View>

      <TouchableOpacity
        style={!this.canAttemptSubmit ? styles.disabledContainer : [styles.buttonContainer, styles.loginButton]}
        onPress={this.doAuth}
        disabled={!this.canAttemptSubmit}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text>Register</Text>
      </TouchableOpacity>

    </View>
  );
}
}
