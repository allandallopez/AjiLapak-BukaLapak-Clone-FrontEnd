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
import CardProcuts from '../Components/Items/CardProducts'
// import RegisterModal from "./RegisterModal";

class Home extends Component {
    render() {
        return (
        <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
            <Header />
            <ScrollView>
                <SearchBar />
                <CardBukaMart/>
                <CardSpesialUntukmu />
                <CardMenuFavorit />
                <CardMaudiGaransi />
                <CardCategoryHome />
                <CardProcuts />
            </ScrollView>
        </View>
        );
    }
}

export default Home;