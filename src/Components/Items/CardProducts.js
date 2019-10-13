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
    ImageBackground
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import axios from 'axios'
import {withNavigation} from 'react-navigation';
// import { getCategories } from '../Services/Axios/categories';
// import SimpleHeader from '../Components/Navigation/SimpleHeader';

class CardProducts extends Component {

    state = {
        products: [],
      };
      async componentDidMount() {
        await axios
          .get(
            `/products`
          )
          .then(res =>
            this.setState({
              products: res.data.data
            })
          );
       // console.log(this.state);
      }

    render() {
        return (
            <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: 'white'}}>
                            <Text style={{marginLeft: 15, marginBottom: 9, fontSize: 15}}>Rekomendasi</Text>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                numColumns={2}
                                style={{flexDirection: 'row'}}
                                data={this.state.products}
                                renderItem={({ item }) =>
                                    <View style={{flex: 1}}>
                                        <TouchableOpacity
                                         onPress={() =>
                                            this.props.navigation.navigate('DetailProduct', {
                                              id: item._id,
                                            })
                                          } 
                                        style={styles.parent}>
                                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                                <ImageBackground 
                                                    source={{uri: 'https://developers.google.com/maps/documentation/maps-static/images/error-image-generic.png'}}
                                                    style={{height: 145, width: 145, margin: 5, borderColor: '#e5e5e5', borderWidth: 1, borderRadius: 4}}
                                                >

                                                <Image 
                                                    source={{uri: `https://aji-lapak.herokuapp.com/products/images/${item.image}`}} 
                                                    style={{height: 145, width: 145, margin: 5, borderColor: '#e5e5e5', borderWidth: 1, borderRadius: 4}}
                                                   // onError={() => {
                                                   //     item.image = 'ae62f613-f811-4133-99d4-392bdc6d0c73lenovo.jpeg';
                                                   //     {() => this.forceUpdate()}
                                                   // }}
                                                   />
                                                </ImageBackground>
                                            </View>
                                            <Text style={styles.text} numberOfLines={2}>{item.name}</Text>
                                            <Text style={{fontSize: 12, position: 'absolute', bottom: 0, fontWeight: 'bold'}}>Rp{item.price}</Text>
                                        </TouchableOpacity>
                                    </View>
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