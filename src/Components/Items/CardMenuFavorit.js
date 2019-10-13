 import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
}
from 'react-native';

export default class CardMenuFavorit extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1,paddingHorizontal:15,paddingVertical:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold',margin:5}}>Menu Favorit</Text> 
                </View> 
                <View style={{flex:1,flexDirection:'row',paddingHorizontal:15}}>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assests/images/menu/bukadonasi.jpg')} style={styles.icon}/>
                        <Text numberOfLines={2} style={styles.title}>BukaDonasi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assests/images/menu/tiketkereta.jpg')} style={styles.icon}/>
                        <Text numberOfLines={2} style={styles.title}>Tiket Kereta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assests/images/menu/paketdata.jpg')} style={styles.icon}/>
                        <Text numberOfLines={2} style={styles.title}>Paket Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assests/images/menu/zakat.jpg')} style={styles.icon}/>
                        <Text numberOfLines={2} style={styles.title}>Zakat</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'row',paddingHorizontal:15, paddingBottom: 15}}>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assests/images/menu/bukaquran.jpg')} style={styles.icon}/>
                        <Text numberOfLines={2} style={styles.title}>BukaQuran</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assests/images/menu/bukaemas.jpg')} style={styles.icon}/>
                        <Text numberOfLines={2} style={styles.title}>BukaEmas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assests/images/menu/bukadompet.jpg')} style={styles.icon}/>
                        <Text numberOfLines={2} style={styles.title}>Buka Dompet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assests/images/menu/bpjs.jpg')} style={styles.icon}/>
                        <Text numberOfLines={2} style={styles.title}>BPJS</Text>
                    </TouchableOpacity>
                </View>     
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        backgroundColor:'#FFF',
    },
    menu:{
        padding:5,
        flex: 1,
        marginHorizontal:10,
        alignItems: 'center',
        justifyContent:'center'
    },
    icon:{
        width: 40,
        height: 40,
    },
    title:{
        marginTop:7,
        fontSize: 11,
        textAlign: 'center'
    },
    image: {
        height: 145,
        borderRadius: 10
    },
});