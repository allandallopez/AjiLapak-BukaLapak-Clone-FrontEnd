import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
}
from 'react-native';

export default class CardMaudiGaransi extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.smallContainer}>
                    <Text style={{padding: 15, fontWeight: '700', fontSize: 13}}>#MAUDIGARANSI</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <TouchableOpacity style={{flex: 1, marginLeft: 16, marginVertical: 3}}>
                            <TouchableOpacity>
                                <Image style={{height: 110, width: 110, borderRadius: 11, marginVertical: 2}} source={require('../../Assests/images/banner/maudigaransikomplit.jpg')}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{height: 110, width: 110, borderRadius: 11, marginVertical: 2}} source={require('../../Assests/images/banner/maudigaransicepat.jpg')}/>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, marginRight: 116, marginVertical: 3}}>
                            <Image style={{height: 220, width: 220, borderRadius: 11, marginVertical: 3}} source={require('../../Assests/images/banner/maudigaransiaman.jpg')}/>
                        </TouchableOpacity>
                    </View> 
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
    smallContainer: {
        height: 290
    }
});