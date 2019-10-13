import React, {PureComponent} from 'react';
import {View, Image, StyleSheet,Dimensions, Text, TextInput, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native'

class SubTransaction extends PureComponent {
    state = {
        products: [],
        qty: '',
        activeSlide: 0,
    }

    async componentDidMount() {
        this.getWish()
    }

    getWish = async () => {
      const token = await AsyncStorage.getItem('token');
      await axios
        .get(
          `/history`, {
              headers: {
                  authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDg5ZTk2NzA2ZDc5ZDI5Y2Q0ODRmMTYiLCJpYXQiOjE1Njk0MjEzNjJ9.CrZjalwO0BLNx4ojotFuB-2UzoikHJ4M9ec1wghxApg'
              }
          }
        )
        .then(res =>
            this.setState({
                products: res.data[0].product,
                qty: res.data[0].qty
            })
        );
        console.log(this.state.products)
        console.log(this.state.qty)
    }

  render() {
    return (
      <View style={{backgroundColor: 'red'}}>
        <Text>{this.state.products.name}</Text>          
    </View>
    );
  }
}

export default SubTransaction;
