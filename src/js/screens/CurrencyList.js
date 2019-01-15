import React, { Component } from 'react';
import {
  FlatList, Text, View, StatusBar,
} from 'react-native';

import currency from '../data/currencies';

export default class CurrencyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: currency,
    };
  }

  handlePressedItem = ({ item }) => (
    <Text onPress={() => console.log(item)}>{item}</Text>
  )

  render() {
    const { currencies } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={this.handlePressedItem}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}
