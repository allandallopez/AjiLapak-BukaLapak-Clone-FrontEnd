import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation'

class Header extends PureComponent {
  render() {
    return (
      <View style={{backgroundColor: 'white', height: 50, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5}}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center', margin: 11}}>
                <Image source={require('../../Assests/images/icon/dana-logo.png')} style={{height: 24, width: 24}}/>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center', margin: 5}}>
                <Text style={{color: '#d71149', fontSize: 12, marginBottom: 2}}>Hubungkan</Text>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <Text style={{fontSize: 13, fontWeight: '700'}}>DANA</Text>
                    <Image source={require('../../Assests/images/icon/right.png')} style={{resizeMode: 'stretch', height: 14, width: 14, marginLeft: 7}}/>
                </View>
            </View>
          </View>
          
          <View style={{flexDirection: 'row', marginRight: 5}}>
            <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', marginHorizontal: 7}}>
                <Image source={require('../../Assests/images/icon/ico_scan_barcode.png')} style={{height: 26, width: 26, opacity: 0.6}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', marginHorizontal: 7}}>
                <Image source={require('../../Assests/images/icon/ico_notification_minor.png')} style={{height: 26, width: 26, opacity: 0.6}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', marginHorizontal: 7}}>
                <Image source={require('../../Assests/images/icon/ico_chat.png')} style={{height: 26, width: 26, opacity: 0.6}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', marginHorizontal: 7}} onPress={() => this.props.navigation.navigate('CartList')}>
                <Image source={require('../../Assests/images/icon/ico_cart.png')} style={{height: 26, width: 26, opacity: 0.6}}/>
            </TouchableOpacity>
          </View>          
      </View>
    );
  }
}

export default withNavigation(Header)
