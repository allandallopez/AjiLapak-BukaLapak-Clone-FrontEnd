import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import {withNavigation} from 'react-navigation'

class CardBukaMart extends PureComponent {
  render() {
    return (
      <View style={{height: 100}}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.menu}>
            <Image source={require('../../Assests/images/icon/ic_1.png')} style={styles.icon}/>
            <Text style={styles.title}>BukaMart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Image source={require('../../Assests/images/icon/ic_2.png')} style={styles.icon}/>
            <Text style={styles.title}>Gratis Ongkir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Image source={require('../../Assests/images/icon/ic_3.png')} style={styles.icon}/>
            <Text style={styles.title}>VoucherKu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu} onPress={() => { this.props.navigation.navigate('Wishlist')}}>
            <Image source={require('../../Assests/images/icon/ic_4.png')} style={styles.icon}/>
            <Text style={styles.title}>Barang Favorite</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      marginTop:13,
      marginLeft:5,
      marginRight:5,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor:'#FFF',
      flexDirection:'row',
  },
  menu:{
      padding:5,
      alignItems:'center',
      justifyContent:'center',
      flex:1
  },
  icon:{
      width: 50,
      height: 50,
  },
  title:{
      marginTop:15,
      fontSize:11
  },
});

export default withNavigation(CardBukaMart);
