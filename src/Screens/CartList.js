import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios'
import {NavigationEvents} from 'react-navigation'

class CartList extends Component {

    state = {
        products: [],
      };
    //   componentDidMount() {
    //       this.getWish()
    //   }

      getWish = async () => {
        const token = await AsyncStorage.getItem('token');
        axios
          .get(
            `/cart`, {
                headers: {
                    authorization : token
                }
            }
          )
          .then(res =>
            this.setState({
              products: res.data.data
            })
          );
      }

      handlerSubmit = async (id) => {
        const token = await AsyncStorage.getItem('token');
        await axios.delete(`/cart/${id}`, {
            headers: {
                authorization: token
            }
        })
        alert('deleted product from cart');
        this.getWish()
      };
      
      reduceCart = async (id) => {
        const token = await AsyncStorage.getItem('token');
      // const reduce = {action: reduce}
        await axios.patch(`/cart/${id}/reduce`, {
            headers: {
                authorization: token
            }
        })
        alert('data reduce');
        this.getWish()
      };
      
      addCart = async (id) => {
        const token = await AsyncStorage.getItem('token');
      // const add = {action: add}
        await axios.patch(`/cart/${id}/add`,{
            headers: {
                authorization: token
            }
        })
        alert('data added');
        this.getWish()
      };



    render() {
       // const price = this.state.products.product.price
        return (
            <React.Fragment>
                <NavigationEvents
                    onDidFocus={() => {
                        this.getWish();
                    }}
               />
            <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack(null)}
                        style={{width: 50}}>
                        <Image style={styles.headIcon} source={require('../Assests/images/icon/ic_back.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.headTitle}>
                        Keranjang Belanja
                    </Text>
                    <View style={{width: 50}}></View>
                </View>
            <ScrollView>
                    <View style={{ backgroundColor: '#f5f5f5',  paddingTop: 10}}>
                        <FlatList
                            style={{flexDirection: 'row'}}
                            data={this.state.products}
                            renderItem={({ item }) =>
                            <View backgroundColor='#f5f5f5'>
                                    <View style={styles.parent}>
                                        <View style={{flexDirection: 'column', marginLeft: 30, marginTop: 30}}>
                                            <Text style={styles.text}>{item.product.name}</Text>
                                            <Text style={{fontSize: 17, fontWeight: 'bold', marginVertical: 5, color: '#191919'}}>Rp.{item.product.price*item.qty}</Text>
                                            <View style={{flexDirection: 'row', marginTop: 40}}>
                                                <TouchableOpacity style={{width: 25, height: 25, borderColor: '#323232', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.reduceCart(item._id)}>
                                                    <Text>-</Text>
                                                </TouchableOpacity>
                                                <Text style={{marginHorizontal: 10}} >{item.qty}</Text>
                                                <TouchableOpacity style={{width: 25, height: 25, borderColor: '#323232', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.addCart(item._id)}>
                                                    <Text>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View  style={{position: 'absolute', right: 10}} >
                                            <Image source={{uri: `https://aji-lapak.herokuapp.com/products/images/${item.product.image}`}} style={{height: 48, width: 48, margin: 5, marginTop: 25}}/>
                                        </View>
                                        <TouchableOpacity style={styles.wish} onPress={ () => this.handlerSubmit(item._id)}>
                                            <Image source={require('../Assests/images/icon/ico_trash.png')} style={{height: 20, width: 20}}/>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={styles.pay} onPress={() => this.props.navigation.navigate('Checkout', {
                        id : item._id,
                        qty : item.qty,
                        price : item.product.price 
                    })}>
                        <Text style={{color: 'white'}}>Bayar</Text>
                    </TouchableOpacity>
                                </View>
                            }
                            keyExtractor={({id}) => id}
                       />
                    </View>
                </ScrollView>
                    {/* <TouchableOpacity style={styles.pay} onPress={() => this.props.navigation.navigate('Checkout', {
                        id : item._id,
                        qty : item.qty,
                        price : item.price 
                    })}>
                        <Text style={{color: 'white'}}>Bayar</Text>
                    </TouchableOpacity> */}
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'white',
        flexDirection: 'row',
       // marginLeft: 6,
       // flex: 1,
        marginHorizontal: 6,
        marginBottom: 10,
        width: 350,
        height: 163,
       // borderRadius: 4,
    },
    text: {
        fontSize: 12,
        color: '#323232',
       // margin: 7
    },
    searchBar: {
        backgroundColor: '#fff',
        paddingLeft: 25,
        paddingRight: 25,
        padding: 15,
       // zIndex: 2,
    },
    searchInput: {
        backgroundColor: '#f1f1f1',
        borderRadius: 3,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        height: 50,
    },
    headIcon: {
        width: 25,
        height: 25
    },
    headTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000'
    },
    wish: {
        position: 'absolute', 
        right: 15, 
        bottom: 13, 
        backgroundColor: '#f5f5f5', 
        height: 35, 
        width: 35, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 7
    },
    pay: {
        height: 40, 
        backgroundColor: '#D71149', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 7, 
        marginHorizontal: 10, 
        marginBottom: 9
    }
});

// const mapsStageToProps = (state) => {
//     return {
//         categories: state.categories
//     }
// };

export default CartList;