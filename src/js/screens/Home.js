import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
  handleChangeText = () => {
    console.log('text changed');
  };

  handlePressBaseCurrency = () => {
    console.log('pressed base currency');
  };

  handlePressQuoteCurrency = () => {
    console.log('pressed quote currency');
  };

  handleSwapCurrency = () => {
    console.log('currency swapped');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          defaultValue={TEMP_BASE_PRICE}
          onPress={this.handlePressBaseCurrency}
          onChangeText={this.handleChangeText}
          keyboardType="numeric"
        />

        <InputWithButton
          editable={false}
          buttonText={TEMP_QUOTE_CURRENCY}
          value={TEMP_QUOTE_PRICE}
          onPress={this.handlePressQuoteCurrency}
        />
        <ClearButton
          onPress={this.handleSwapCurrency}
          text="Reverse Currency"
        />

      </Container>
    );
  }
}

export default Home;
