import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, AsyncStorage, Dimensions} from 'react-native';
import {NavigationEvents} from 'react-navigation'
// import {Image} from 'react-native-elements';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(function(){
      props.navigation.navigate('Home')
    }, 2500)
  }, [])
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View>
      <Image
        source={require('../Assests/images/splash.png')}
        style={{
          width: screenWidth,
          height: screenHeight,
          alignItems: 'center',
          justifyContent: 'center'
        }}
     />
    </View>
  );
};

export default SplashScreen;
