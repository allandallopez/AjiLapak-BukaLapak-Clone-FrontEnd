import React, {Component} from 'react';
import axios from 'axios'
import {StyleSheet, TouchableOpacity, Image, Text, View, TextInput, FlatList} from 'react-native';

class Categories extends Component {
  state = {
    categories: [],
  };
  async componentDidMount() {
    await axios
      .get(
        `/categories`
      )
      .then(res =>
        this.setState({
          categories: res.data.value.data
        })
      );
    console.log(this.state);
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <FlatList
           // style={styles.container}
            data={this.state.categories}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 20, flexDirection: 'row'}}>{item.name}</Text>
              </View>
            )}
            keyExtractor={({id}, index) => id}
         />          
          <Text>cob</Text>
      </View>
    );
  }
}

export default Categories;
