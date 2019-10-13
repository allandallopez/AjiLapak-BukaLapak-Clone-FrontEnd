import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View, TextInput, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel'

const width = Dimensions.get('window').width
const widthImg = width * 0.94

class CardSpesialUntukmu extends PureComponent {
    ads = [
        <Image style={styles.image} source={require('../../Assests/images/banner/Bloggy_1.jpg')} />,
        <Image style={styles.image} source={require('../../Assests/images/banner/Bloggy_2.jpg')} />,
        <Image style={styles.image} source={require('../../Assests/images/banner/Bloggy_3.jpg')} />,
        <Image style={styles.image} source={require('../../Assests/images/banner/Bloggy_4.jpg')} />,
        <Image style={styles.image} source={require('../../Assests/images/banner/Bloggy_5.jpg')} />,
        <Image style={styles.image} source={require('../../Assests/images/banner/Bloggy_6.jpg')} />,
        <Image style={styles.image} source={require('../../Assests/images/banner/Bloggy_7.jpg')} />
    ]
  render() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', marginVertical: 14, marginLeft: 15}}>
                <Text style={{fontWeight: '600', fontSize: 15}}>Spesial Untukmu</Text>
                <TouchableOpacity style={{position: 'absolute', right: 13}}>
                    <Text style={{fontSize:13, color: '#D71149'}}>Lihat semua</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
                <View style={{marginTop: 3}}>
                    <Carousel 
                        ref = {ref => this.carouselRef = ref}
                        data = {this.ads}
                        renderItem = { ({item}) => item}
                        onSnapToItem={ i => this.setState({ activeTab : i }) }
                        sliderWidth={ width }
                        itemWidth={ widthImg }
                        slideStyle={{paddingHorizontal:1}}
                        inactiveSlideOpacity={ 0.7 }
                        inactiveSlideScale={ 0.7 }
                        loop={true}
                        autoplay={true}
                        autoplayInterval={3000}
                   />
                </View>          
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        backgroundColor:'#FFF',
        height:190
    },
    image: {
        height: 125,
        width: width * 0.92,
        borderRadius: 8,
        alignSelf: 'center',
    },
});

export default CardSpesialUntukmu;
