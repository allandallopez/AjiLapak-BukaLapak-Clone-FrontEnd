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

class Wishlist extends Component {

    state = {
        products: [],
      };
      componentDidMount() {
          this.getWish()
      }

      getWish = async () => {
        const token = await AsyncStorage.getItem('token');
        axios
          .get(
            `/wishlist`, {
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
        await axios.delete(`/wishlist/${id}`, {
            headers: {
                authorization: token
            }
        })
        alert('deleted product from wishlist');
        this.componentDidMount()
      };

    render() {
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
                        Barang Favorit
                    </Text>
                    <View style={{width: 50}}></View>
                </View>
            <ScrollView>
                    <View style={{flexDirection: 'row', backgroundColor: '#f5f5f5', marginBottom: 60, paddingTop: 10}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            style={{flexDirection: 'row'}}
                            data={this.state.products}
                            renderItem={({ item }) =>
                                <View backgroundColor='#f5f5f5' style={{flex: 1, justifyContent: 'center'}}>
                                    <TouchableOpacity style={styles.parent}>
                                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                            <Image source={{uri: `https://aji-lapak.herokuapp.com/products/images/${item.product.image}`}} style={{height: 156, width: 156, margin: 5}}/>
                                        </View>
                                        <TouchableOpacity style={styles.wish} onPress={ () => this.handlerSubmit(item._id)}>
                                            <Image source={require('../Assests/images/icon/ic_favfilled.png')} style={{height: 20, width: 20}}/>
                                        </TouchableOpacity>
                                        <View style={{marginLeft: 10}}>
                                            <Text style={styles.text}>{item.product.name}</Text>
                                            <Text style={{fontSize: 14, fontWeight: 'bold', marginVertical: 5, color: '#191919'}}>Rp.{item.product.price}</Text>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../Assests/images/icon/ic_starfilled.png')} style={{height: 15, width: 15}}/>
                                                <Image source={require('../Assests/images/icon/ic_starfilled.png')} style={{height: 15, width: 15}}/>
                                                <Image source={require('../Assests/images/icon/ic_starfilled.png')} style={{height: 15, width: 15}}/>
                                                <Image source={require('../Assests/images/icon/ic_starfilled.png')} style={{height: 15, width: 15}}/>
                                                <Image source={require('../Assests/images/icon/ic_starempty.png')} style={{height: 15, width: 15}}/>
                                                {/* <Text style={{fontSize: 12, color: '#4c4c4c'}}>ini bintang</Text> */}
                                                <Text style={{fontSize: 12, color: '#4c4c4c'}}> (48 ulasan)</Text>
                                            </View>
                                            <Text style={{fontSize: 12, color: '#4c4c4c'}}>Bekasi</Text>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{fontSize: 12, color: '#4c4c4c'}}>92% </Text>
                                                <Text style={{fontSize: 12, color: '#4c4c4c'}}> (10rb Feedback)</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={{backgroundColor: '#d71149', marginHorizontal: 10, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginVertical: 50}}
                                            onPress={() => this.props.navigation.navigate('Checkout', {id: item.product._id})}
                                        >
                                            <Text>Beli</Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            }
                            keyExtractor={({id}) => id}
                       />
                    </View>
                </ScrollView>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'white',
       // marginLeft: 6,
        marginHorizontal: 6,
        marginBottom: 10,
        width: 172,
        height: 354,
        borderRadius: 4,
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
        right: 6, 
        top: 6, 
        backgroundColor: '#f5f5f5', 
        height: 35, 
        width: 35, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 7
    }
});

// const mapsStageToProps = (state) => {
//     return {
//         categories: state.categories
//     }
// };

export default Wishlist;