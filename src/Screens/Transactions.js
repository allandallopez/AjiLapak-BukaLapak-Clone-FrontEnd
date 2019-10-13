import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import {connect} from 'react-redux';

import CardTransaction from '../Components/Items/CardTransaction'
// import RegisterModal from "./RegisterModal";

class Transactions extends Component {
    render() {
        return (
        <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
            <CardTransaction />
        </View>
        );
    }
}

export default Transactions;