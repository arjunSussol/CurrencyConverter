import React, { Component } from 'react';
import {
  FlatList, View, StatusBar,
} from 'react-native';

import currency from '../data/currencies';
import { ListItem, Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

export default class CurrencyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: currency,
    };
  }

  render() {
    const { currencies } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={() => console.log(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}
