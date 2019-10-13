import React, {Component} from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    View, AsyncStorage
} from 'react-native';
import {NavigationEvents, withNavigation} from 'react-navigation';
// import {connect} from "react-redux";
import axios from 'axios'

class DetailProduct extends Component {

    state = {
        products: [],
        scrollY: new Animated.Value(0),
        isWishlist: true,
        rate: [1, 1, 1, 0, 0]
    }

     async componentDidMount() {
        const ProdcutId = this.props.navigation.getParam('id');
         await axios.get(`/products/${ProdcutId}`)
        .then(res => this.setState({
            products: res.data
        }))
        
    }
    
    toRate(int) {
        let rate = [];
        for (let i = 0; i < int; i++) {
            rate.push(1)
        }
        return rate;
    }

    handlerSubmit = async (id) => {
        const token = await AsyncStorage.getItem('token')
        const data = {productId: id}
        await axios.post(`/wishlist`, data,
        {
            headers: {
                authorization: token
            }
        })
        alert('Add to Wishlist')
        this.componentDidMount()
    }

    addCart = async (id) => {
        const token = await AsyncStorage.getItem('token')
        const data = {productId: id}
        await axios.post(`/cart`, data,
        {
            headers: {
                authorization: token
            }
        })
        alert('Add to Cart')
        this.componentDidMount()
    }

    // deleteWishlistRedux(id){
    //     this.props.dispatch(deleteWishList(id,this.props.account.token));
    // }

    // addWishlistRedux(id) {
    //     addWishList(id, this.props.account.token);
    //     //await this.props.dispatch(getWishlist(this.props.account.token));
    // }
    // wishlist(id){
    //     let data = this.props.wishlist.data;
    //     let found = data.find(function (data) {
    //         return data.product._id=id;
    //     });

    //     console.log(found);
    //     if (found){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    // cekWishlistRedux(id){
    //     if (this.wishlist(id)){
    //         this.deleteWishlistRedux(id)
    //     } else {
    //         this.addWishlistRedux(id)
    //     }
    // }

    render() {
        const item = this.state.products
        const {navigation} = this.props;
        let data = navigation.state.params;
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });
        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -50],
            extrapolate: 'clamp',
        });

        return (
            // <NavigationEvents
            //     onDidFocus={() => {
            //         this.getWish()}}/>
            <View style={styles.fill}>
                <ScrollView
                    style={[styles.fill]}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                    )}
                >
                    <View style={styles.scrollViewContent}>
                        <View style={styles.description}>
                             {/* <Image source={{uri: `http://192.168.0.130:8080/products/images/${item.image}`}} 
                            style={{height: 156, width: 156, margin: 5, backgroundColor: 'green'}}/> */}

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                {/* {this.toRate(data.rating).map((star) =>
                                    <Image style={{width: 10, height: 10}}
                                           source={require('../Assests/images/icon/air-jordan-7-retro-sp-shoe.jpg')}/>
                                )} */}
                                <Text style={{marginLeft: 5, fontSize: 10}}>900 ulasan</Text>
                            </View>
                            <Text style={{marginTop: 5, fontSize: 16, fontWeight: '700', color: '#000'}}
                                  numberOfLines={2}>{item.name}</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{flex: 1, fontWeight: '700'}}>Rp.{item.price}</Text>
                                <TouchableOpacity style={{
                                    backgroundColor: '#F4F4F4',
                                    borderRadius: 5,
                                    padding: 3,
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <Image style={{width: 15, height: 15, opacity: 0.9}}
                                           source={require('../Assests/images/icon/ic_negofill.png')}/>
                                    <Text style={{color: '#444', margin: 3}}>Nego</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alevation: 1,
                            flexDirection: 'row',
                            padding: 6,
                            backgroundColor: '#F8F8F8'
                        }}>
                            <Text style={{color: '#000', flex: 1}}>Benefit</Text>
                            <Image style={{width: 25, height: 25, opacity: 0.7}}
                                   source={require('../Assests/images/icon/ic_free_delivery_fee.png')}/>
                        </View>

                        <View style={{marginTop: 20}}>
                            <TouchableOpacity style={{
                                padding: 10,
                                backgroundColor: '#FFF',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image style={{width: 28, height: 28, opacity: 0.7}}
                                       source={require('../Assests/images/icon/ic_cek_ongkir.png')}/>
                                <View style={{flex: 1, marginLeft: 10}}>
                                    <Text>Ongkir mulai Rp11.000</Text>
                                    <Text style={{fontSize: 10}}>Pengiriman ke Bandung</Text>
                                </View>
                                <Image style={{width: 28, height: 28, opacity: 0.7}}
                                       source={require('../Assests/images/icon/ico_chevron_right_minor.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                padding: 10,
                                backgroundColor: '#FFF',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image style={{width: 28, height: 28, opacity: 0.7}}
                                       source={require('../Assests/images/icon/ic_installment.png')}/>
                                <View style={{flex: 1, marginLeft: 10}}>
                                    <Text>Cicilan 0% mulai Rp280rb/bln</Text>
                                </View>
                                <Image style={{width: 28, height: 28, opacity: 0.7}}
                                       source={require('../Assests/images/icon/ico_chevron_right_minor.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{marginTop: 20, backgroundColor: '#FFF', padding: 10}}>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: '#111', fontSize: 15, fontWeight: '700', flex: 1}}>
                                        Informasi Barang
                                    </Text>
                                    <Text style={{
                                        padding: 4,
                                        color: '#FFF',
                                        fontSize: 11,
                                        backgroundColor: '#D71149',
                                        borderRadius: 15
                                    }}>
                                        Baru
                                    </Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 20}}>
                                    <Text style={{color: '#666', fontSize: 12, flex: 1}}>Stok</Text>
                                    <Text style={{color: '#666', fontSize: 12,}}>> {item.stock}</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
                                    <Text style={{color: '#666', fontSize: 12, flex: 1}}>Terjual</Text>
                                    <Text style={{color: '#666', fontSize: 12,}}>6</Text>
                                </View>
                            </View>
                            <View style={{padding: 10, borderTopWidth: 2, borderTopColor: '#F5F5F5'}}>
                                <Text>{item.description}
                                </Text>
                                {/* <TouchableOpacity
                                    style={{marginTop: 10, flex: 1, alignItems: 'center', paddingTop: 10}}>
                                    <Text
                                        style={{color: '#D71149', fontSize: 15, fontWeight: '300'}}>Selengkapnya</Text>
                                </TouchableOpacity> */}
                            </View>
                        </View>

                        <View style={{padding: 10, backgroundColor: '#FFF', marginBottom: 20, marginTop: 20}}>
                            <Text style={{fontSize: 16, color: '#000', fontWeight: '700'}}>Pelapak</Text>

                            <View style={{alignItems: 'center', marginTop: 10, flexDirection: 'row'}}>
                                <View style={{borderWidth: 1, borderColor: '#F3F3F3', borderRadius: 25}}>
                                    {/* <Image style={{width: 50, height: 50, borderRadius: 25}}
                                           source={require('../Assets/Images/ic_launcher.png')}/> */}
                                </View>
                                <View style={{marginLeft: 10}}>
                                    <Text style={{fontWeight: '500', color: '#222'}}>AjiLapak Indonesia</Text>
                                    <Text style={{fontSize: 12}}>Bandung</Text>
                                </View>
                            </View>

                            <View style={{margin: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image style={{width: 15, height: 15}}
                                           source={require('../Assests/images/icon/ic_feedback.png')}/>
                                    <Text style={{fontSize: 11, marginLeft: 5}}>99%(1223 feedback)</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image style={{width: 15, height: 15}}
                                           source={require('../Assests/images/icon/ic_waktu_proses.png')}/>
                                    <Text style={{fontSize: 11, marginLeft: 5}}>Waktu kirim pesanan ± 13 jam</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            

                <View style={{borderTopRadius: 1, height: 55, padding: 10, flexDirection: 'row'}}>
                    <TouchableOpacity style={{
                        width: 35,
                        marginRight: 10,
                        borderRadius: 3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 35,
                        backgroundColor: '#F1F1F1'
                    }}>
                        <Image style={{width: 20, height: 20}}
                               source={require('../Assests/images/icon/ic_chat_new.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 35,
                        marginRight: 10,
                        borderRadius: 3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 35,
                        backgroundColor: '#F1F1F1',
                    }}
                    onPress={ () => this.addCart(item._id)}
                    // onPress={() => this.props.navigation.navigate('Checkout', {id : item._id})}
                    >
                        <Image style={{width: 20, height: 20}}
                               source={require('../Assests/images/icon/ic_addtocart.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Checkout', {id : item._id})} 
                    style={{
                        flex: 1,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#D71149'
                    }}>
                        <Text style={{color: '#FFF'}}>Beli Sekarang</Text>
                    </TouchableOpacity>
                </View>

                <Animated.View style={[styles.header, {height: headerHeight}]}>
                    <Animated.Image
                        style={[
                            styles.backgroundImage,
                            {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
                        ]}
                        source={{uri : `https://aji-lapak.herokuapp.com/products/images/${item.image}`}}
                    />
                    <View style={styles.bar}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../Assests/images/icon/h5_title_bar_back_btn.png')}
                                   style={{width: 25, height: 25, margin: 10}}/>
                        </TouchableOpacity>
                        <Text numberOfLines={1}a style={styles.title}>{item.name}</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CartList')}>
                            <Image source={require('../Assests/images/icon/ico_cart.png')}
                                   style={{opacity: 0.7, width: 20, height: 20, marginLeft: 15, marginRight: 20}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.handlerSubmit(item._id)}>
                         <Image source={require('../Assests/images/icon/ico_heart.png')} 
                            style={{opacity: 0.7, width: 20, height: 20, marginRight: 15}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../Assests/images/icon/ico_more_vertical.png')}
                                   style={{opacity: 0.7, width: 20, height: 20, margin: 10}}/>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

// const mapsStageToProps = (state) => {
//     return {
//         account: state.account,
//         wishlist:state.wishlist
//     }
// };

export default withNavigation(DetailProduct);

const MAX_WIDTH = Dimensions.get('window').width;
const HEADER_MAX_HEIGHT = Dimensions.get('window').width;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    description: {
        backgroundColor: '#FFF',
        padding: 20,

    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
        overflow: 'hidden',
        elevation: 1,
    },
    bar: {
        marginTop: 15,
        height: 32,
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        backgroundColor: 'transparent',
        color: '#333',
        fontSize: 16,
        width: MAX_WIDTH * 0.5,
        fontWeight: '600'
    },
    scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT,
        backgroundColor: '#E9E9E9',
    },
    backgroundImage: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
});