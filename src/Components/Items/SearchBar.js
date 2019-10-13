import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View, TextInput} from 'react-native';

class SearchBar extends PureComponent {
  render() {
    return (
      <View style={{backgroundColor: 'white', height: 55}}>
        <TextInput placeholder='AjiLapak' style={{backgroundColor: '#f0f0f0', marginHorizontal: 13, marginBottom: 15, borderRadius: 4}}></TextInput>          
      </View>
    );
  }
}

export default SearchBar;
