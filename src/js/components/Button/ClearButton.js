import PropTypes from 'prop-types';
import React from 'react';
import {
  Text, TouchableOpacity, Image, View,
} from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  </View>
);

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;
