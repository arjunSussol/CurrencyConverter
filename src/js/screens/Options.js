import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 25;

class Options extends Component {
    handlePressTheme = () => {
      console.log('Pressed Theme');
    }

    handlePressSite = () => {
      console.log('Pressed Site');
    }

    render() {
      return (
        <ScrollView>
          <StatusBar translucent={false} barStyle="default" />
          <ListItem
            text="Theme"
            onPress={this.handlePressTheme}
            customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />}
          />
          <Separator />
          <ListItem
            text="Fixer.io"
            onPress={this.handlePressSite}
            customIcon={<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
          />
          <Separator />
        </ScrollView>
      );
    }
}

export default Options;
