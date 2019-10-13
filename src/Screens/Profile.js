import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Alert,
    Dimensions, BackHandlerStatic as BackHandler, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {withNavigation, NavigationEvents} from 'react-navigation'
import {getAccount, logout} from '../Public/Action/users'

class Profile extends Component {

    state = {
        users: [],
      };

      componentDidMount() {
          this.getAccountApi()
          this.props.users.isLogin == true ? null : this.props.navigation.navigate('FormLogin')

          this.subs = [
            this.props.navigation.addListener('willFocus', () => {
                this.props.users.isLogin == true ? null:this.props.navigation.navigate('FormLogin');
            })
        ]
      }

      getAccountApi = async () => {
          const token = await AsyncStorage.getItem('token')
          this.props.dispatch(getAccount(token))
        //   .then(res => console.log(res.action.payload.data.data))
          .then(res => this.setState({
              users: res.action.payload.data.data
          }))
      }

    //   async logoutAccount () {
    //       await AsyncStorage.clear()
    //       alert('iam logout')
    //       this.componentDidMount()
    //       this.props.navigation.navigate('Home')
    //   }

    logoutApi() {
        this.props.dispatch(logout())
        AsyncStorage.clear()
        this.getAccountApi()
        this.props.navigation.navigate('Home')
    }

    render() {
        const item = this.state.users
        return (
            <View>
            <NavigationEvents
            onDidFocus={() => {this.getAccountApi() }}/>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <LinearGradient colors={['#fff', '#929292']} style={styles.gradient}>
                    <View style={styles.headerBar}>
                        <View>
                            <Text style={styles.textHead}>Akun Kamu</Text>
                        </View>
                        <View style={styles.headerRight}>
                            <TouchableOpacity style={styles.iconHead}>
                                <Image source={require('../Assests/images/icon/ico_notification_minor.png')}
                                       style={styles.barIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconHead}>
                                <Image source={require('../Assests/images/icon/ico_comment_minor.png')}
                                       style={styles.barIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.logoutApi()}
                                style={styles.iconHead}>
                                <Image source={require('../Assests/images/icon/ico_setting.png')}
                                       style={styles.barIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.profile}>
                        <View style={{marginTop: -30, alignItems: 'center'}}>
                            <TouchableOpacity>
                                {/* <Image style={styles.imgProfile}
                                       source={require('../Assests/images/icon/avatar.png')}/> */}
                                        <Image source={{uri: `https://aji-lapak.herokuapp.com/users/images/${item.imageUrl}`}} style={styles.imgProfile}/>
                            </TouchableOpacity>
                            <View style={{flexDirection: 'row'}}>
                                <Text numberOfLines={1}
                                      style={styles.nameProfile}>{item.username}</Text>
                                <TouchableOpacity
                                 onPress={() => this.props.navigation.navigate('EditProfile')}
                                 style={{justifyContent: 'center'}}>
                                    <Image style={{width: 14, height: 14}}
                                           source={require('../Assests/images/icon/ico_edit_minor.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingBottom: 8,
                                paddingTop: 3,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
                                <Text style={{color: '#000'}}>Saldo Bukalapak</Text>
                                <Text style={{}}></Text>
                            </View>
                            <View style={{
                                paddingLeft: 20,
                                paddingRight: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
                                <View style={styles.walletBar}>
                                    <Image style={styles.walletIcon}
                                           source={require('../Assests/images/dana-logo.png')}/>
                                    <Text style={{padding: 4}}>DANA</Text>
                                    <Text style={{fontWeight: '500'}}>Rp7,54rb</Text>
                                </View>
                                <View style={styles.walletBar}>
                                    <Image style={styles.walletIcon}
                                           source={require('../Assests/images/icon/dompet.jpg')}/>
                                    <Text style={{padding: 4}}>Saldo</Text>
                                    <Text style={{fontWeight: '500'}}>Rp0</Text>
                                </View>
                                <View style={styles.walletBar}>
                                    <Image style={styles.walletIcon}
                                           source={require('../Assests/images/icon/kredit.jpg')}/>
                                    <Text style={{padding: 4}}>Credits</Text>
                                    <Text style={{fontWeight: '500'}}>Rp1,65rb</Text>
                                </View>
                            </View>
                            <View style={styles.tabBar}>
                                <TouchableOpacity style={styles.btnTab}>
                                    <View style={styles.lineTab}></View>
                                    <Text>Pembeli</Text>
                                    <View style={[styles.lineTab, {backgroundColor: 'transparent'}]}></View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnTab}>
                                    <View style={styles.lineTab}></View>
                                    <Text style={{color: '#000'}}>Pelapak</Text>
                                    <View style={[styles.lineTab, {backgroundColor: '#FF3566'}]}></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{height: 515, backgroundColor: '#f9f9f9'}}>
                        <View style={{padding: 20, paddingTop: 30, alignItems: 'center'}}>
                            <Text style={{fontSize: 16, color: '#000', fontWeight: '500'}}>Ayo, Jualan di
                                Bukalapak!</Text>
                        </View>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('AddProduct')}
                            style={{
                            height: 40,
                            backgroundColor: '#EE4B60',
                            borderRadius: 4,
                            marginLeft: 20,
                            marginRight: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{color: '#fff', fontSize: 17}}>Mulai Berjualan</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
        );
    }
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'transparent',
    },
    textHead: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000',
    },
    headerRight: {
        flexDirection: 'row',
    },
    barIcon: {
        width: 25,
        height: 25,
        opacity: 0.6,
        alignSelf: 'center'
    },
    iconHead: {
        marginLeft: 10,
    },
    // gradient: {
    //     height: this.height,
    // },
    profile: {
        marginTop: 34,
        height: 248,
        backgroundColor: '#fff',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    imgProfile: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    nameProfile: {
        padding: 15,
        paddingRight: 5,
        fontSize: 18,
        color: '#000',
    },
    walletBar: {
        width: 80,
        alignItems: 'center',
        margin: 10,
    },
    walletIcon: {
        width: 25,
        height: 25,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        elevation: 2,
        backgroundColor: '#fff'
    },
    btnTab: {
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    lineTab: {
        height: 3,
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    }
});

const mapsStageToProps = (state) => {
    return {
        users: state.users
    }
}

export default withNavigation(connect(mapsStageToProps)(Profile))