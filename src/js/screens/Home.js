import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;

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

  handleOptionsPress = () => {
    console.log('options pressed');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
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
          <LastConverted
            date={TEMP_LAST_CONVERTED}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            onPress={this.handleSwapCurrency}
            text="Reverse Currency"
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
