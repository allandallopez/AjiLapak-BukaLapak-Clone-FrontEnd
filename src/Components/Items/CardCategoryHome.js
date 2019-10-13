import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
}
from 'react-native';
import {withNavigation} from 'react-navigation'

export class CardCategoryHome extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1,paddingHorizontal:10,paddingVertical:10}}>
                    <Text style={{fontSize:16,fontWeight:'600',margin:5}}>Kategori Barang</Text> 
                    <TouchableOpacity style={{position: 'absolute', right: 15, top: 15}} onPress={() => { this.props.navigation.navigate('CategoriesList')}}>
                        <Text style={{fontSize: 12, color: '#D71149'}}>Lihat Semua</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection: 'column', flex: 1, marginTop: 10, marginHorizontal: 3}}>
                        <View style={{flexDirection:'row',paddingHorizontal:5, marginVertical: 7}}>
                            <TouchableOpacity style={styles.menu}>
                                <Image source={require('../../Assests/images/category/beauty.jpg')} style={styles.icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menu}>
                                <Image source={require('../../Assests/images/category/baby-care.jpg')} style={styles.icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menu}>
                                <Image source={require('../../Assests/images/category/fashion-men.jpg')} style={styles.icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menu}>
                                <Image source={require('../../Assests/images/category/computer.jpg')} style={styles.icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menu}>
                                <Image source={require('../../Assests/images/category/bicycle.jpg')} style={styles.icon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',paddingHorizontal:5, paddingBottom: 15}}>
                            <TouchableOpacity style={styles.menu}>
                                <Image source={require('../../Assests/images/category/healthy.jpg')} style={styles.icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menu}>
                                <Image source={require('../../Assests/images/category/fashion-women.jpg')} style={styles.icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menu}>
                                <Image source={require('../../Assests/images/category/phone.jpg')} style={styles.icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menu}>
                                <Image source={require('../../Assests/images/category/electronic.jpg')} style={styles.icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menu}>
                                <Image source={require('../../Assests/images/category/industrial.jpg')} style={styles.icon}/>
                            </TouchableOpacity>
                        </View>     
                    </View>
                </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        backgroundColor:'#FFF',
        height: 270,

    },
    menu:{
       // padding:5,
        flex: 1,
       // margin:5,
        alignItems: 'center',
        justifyContent:'center',
        
    },
    icon:{
        width: 100,
        height: 100,
        borderRadius: 3,
        marginHorizontal: 5
       // margin: 5
    },
    title:{
        marginTop:7,
        fontSize: 11,
        textAlign: 'center'
    },
    image: {
        height: 270,
        borderRadius: 10
    },
});

export default withNavigation(CardCategoryHome)