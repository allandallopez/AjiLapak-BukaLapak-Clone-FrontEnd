import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import {connect} from 'react-redux';

import Header from '../Components/Navigations/Header'
import SearchBar from '../Components/Items/SearchBar'
import CardBukaMart from '../Components/Items/CardBukaMart'
import CardSpesialUntukmu from '../Components/Items/CardSpesialUntukmu'
import CardMenuFavorit from '../Components/Items/CardMenuFavorit'
import CardMaudiGaransi from '../Components/Items/CardMaudiGaransi'
import CardCategoryHome from '../Components/Items/CardCategoryHome'
import CardHistory from '../Components/Items/CardHistory'
// import RegisterModal from "./RegisterModal";

class History extends Component {
    render() {
        return (
        <View style={{backgroundColor: '#f5f5f5', flex: 1, alignItems: 'center'}}>
            {/* <Header /> */}
            <ScrollView>
                {/* <SearchBar />
                <CardBukaMart/>
                <CardSpesialUntukmu />
                <CardMenuFavorit />
                <CardMaudiGaransi />
                <CardCategoryHistory /> */}
                <CardHistory />
            </ScrollView>
        </View>
        );
    }
}

export default History;