import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ScrollView, Alert, AsyncStorage,
}
    from 'react-native';
import {connect} from 'react-redux';
import {forgotPassword} from "../Public/Action/users";
import {withNavigation} from 'react-navigation'
import FormRegister from "./FormRegister";
import Axios from 'axios';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }

    async postForgotPassword(email) {
        const data = {email: email}
        if (!this.state.email) {
            alert('Please input email');
          } else {
        await this.props.dispatch(forgotPassword(data))
        .then(res => {
            this.props.navigation.navigate('VerifyOtp', {email : this.state.email})
        })
        .catch(err => {
            alert('Email tidak valid')
        })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content"/>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack(null)}
                    >
                        <Image style={styles.headIcon} source={require('../Assests/images/icon/ic_back.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.headTitle}>
                        Lupa Password?
                    </Text>
                </View>
                <ScrollView>
                    <View style={styles.contain}>
                        <Text style={styles.label}>E-MAIL</Text>
                        <TextInput
                            onChangeText={(email) => this.setState({email})}
                            style={styles.input}
                       />
                        <TouchableOpacity
                            onPress={() => this.postForgotPassword(this.state.email)}
                            style={styles.btnLogin}>
                            <Text style={styles.btnTextLogin}>Kirim</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        height: 50,
    },
    headTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000',
        marginLeft: 100
    },
    headIcon: {
        width: 25,
        height: 25
    },
    contain: {
        height: 500,
        paddingTop: 50,
        paddingBottom: 50,
    },
    title: {
        fontSize: 24,
        color: '#151515',
        marginBottom: 35,
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: '#151515'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 35,
    },
    btnLogin: {
        backgroundColor: '#D71149',
        borderRadius: 2,
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextLogin: {
        color: '#fff',
        fontSize: 17
    },
    line: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        width: '30%'
    },
    lineBar: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    optLoginBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optLoginBtn: {
        backgroundColor: '#f5f5f5',
        borderColor: '#ddd',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        height: 45,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textFoot: {
        alignSelf: 'center',
        color: '#aaa',
        fontSize: 13
    }
});

const mapsStageToProps = (state) => {
    return {
        users : state.users
    }
};

export default withNavigation(connect(mapsStageToProps)(ForgotPassword));
// export default FormLogin