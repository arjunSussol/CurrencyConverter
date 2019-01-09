import PropTypes from 'prop-types';
import React from 'react';
import {
  View, TextInput, TouchableHighlight, Text,
} from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = ({
  buttonText, editable, onPress, ...props
}) => {
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight style={styles.buttonContainer} onPress={onPress} underlayColor={underlayColor}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" editable={editable} {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  onPress: PropTypes.func,
};

export default InputWithButton;
