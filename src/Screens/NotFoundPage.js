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
    AsyncStorage
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import axios from 'axios'
import {withNavigation, NavigationEvents} from 'react-navigation';
// import { getCategories } from '../Services/Axios/categories';
// import SimpleHeader from '../Components/Navigation/SimpleHeader';

class NotFoundPage extends Component {
    
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, paddingTop: 50, paddingBottom: 70}}>Masih dalam pengembangan</Text>
                <Image source={require('../Assests/images/icon/img_bldown.png')} style={{width: 200, height: 200}}/>
            </View>
        );
    }
}

export default withNavigation(NotFoundPage);   