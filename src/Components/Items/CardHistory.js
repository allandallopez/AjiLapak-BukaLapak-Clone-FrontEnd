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
    AsyncStorage
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import axios from 'axios'
import {withNavigation, NavigationEvents} from 'react-navigation';
// import { getCategories } from '../Services/Axios/categories';
// import SimpleHeader from '../Components/Navigation/SimpleHeader';

class CardProducts extends Component {
    state ={
        products: []
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
                  authorization : token
              }
          }
        )
        .then(res =>
           // console.log(res.data.data)
            this.setState({
                products: res.data.data,
               // qty: res.data[0].qty
            })
        );
        console.log(this.state.products)
       // console.log(this.state.qty)
    }

    render() {
        return (
            <ScrollView>
                <NavigationEvents
                    onDidFocus={() => {
                        this.getWish();
                    }}
               />
                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: '#f5f5f5'}}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                               // numColumns={2}
                                style={{flexDirection: 'row'}}
                                data={this.state.products}
                                renderItem={({ item }) =>
                                <View>
                                <View style={{backgroundColor:'#fefefe',marginTop:15,marginHorizontal:8,height:87, width: 340,borderWidth:1,borderColor:'#ddd',flexDirection:'row',padding:5}}>
                                    <View style={{flex:1,padding:2}}>
                                        <Image source={{uri: `https://aji-lapak.herokuapp.com/products/images/${item.product.image}`}} style={{width:61,height:65}}/>   
                                    </View>
                                    <View style={{flex:4,padding:2, marginLeft: 20}}>
                                        <Text style={{fontSize:15}} numberOfLines={1}>{item.product.name}</Text>
                                        <Text style={{fontWeight:'bold',marginBottom:2,marginTop:2,color:'#D71149'}}>Rp{item.product.price*item.qty}</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontSize:11}}>Dibayar</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                                   // <View style={{flex: 1}}>
                                   //     <TouchableOpacity
                                   //      onPress={() =>
                                   //         this.props.navigation.navigate('DetailProduct', {
                                   //           id: item._id,
                                   //         })
                                   //       } 
                                   //     style={styles.parent}>
                                   //         <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                   //             <Image source={{uri: ` /products/images/${item.image}`}} style={{height: 145, width: 145, margin: 5, borderColor: '#e5e5e5', borderWidth: 1, borderRadius: 4}}/>
                                   //         </View>
                                   //         <Text style={styles.text} numberOfLines={2}>{item.qty}</Text>
                                   //         <Text style={{fontSize: 12, position: 'absolute', bottom: 0, fontWeight: 'bold'}}>Rp{item.product.name}</Text>
                                   //     </TouchableOpacity>
                                   // </View>
                                }
                                keyExtractor={({id}) => id}
                           />
                        </View>
                    </View>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
       // backgroundColor: 'green',
        marginLeft: 16,
        marginBottom: 10,
        width: 156,
        height: 215,
       // alignItems: 'center',
       // justifyContent: 'center',
        borderRadius: 4,
       // height: 30
       // flexDirection: 'row'
    },
    text: {
        fontSize: 12,
        color: '#000',
        marginTop: 5
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
    }
});

export default withNavigation(CardProducts);   