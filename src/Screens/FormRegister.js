import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ScrollView,
    CheckBox, Alert,
}
    from 'react-native';
// import {cekRegistrasi, getToken, getVerifikasiToken, postLogin, postRegister} from "../Services/Axios/account";
import {register} from '../Public/Action/users'
import {connect} from "react-redux";
// import SmsOTP from "./SmsOTP";

class FormRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
           name: '',
           email: '',
           gender: '',
           username: '',
           password1: '',
           password2: '',
       //    refferal: '',
           checked: false
        }
    }

    async postRegister() {
       // let state = this.state;
       // if (state.name == '' || state.email == '' || state.gender == '' || state.username == '' || state.password1 == '' || this.state.checked == false) {
       //     console.log(this.state)
       //     Alert.alert('Alert', 'lengkapi form kembali')
       // } else {
       //     if (state.password1 != state.password2) {
       //         Alert.alert('Alert', 'password tidak sama')
       //     } else {
        if(!this.state.name || !this.state.email || !this.state.gender || !this.state.username || !this.state.password1) {
            alert('Data belum lengkap')
        } else if (this.state.password1 != this.state.password2) {
            alert('Password tidak sama')
        } else {
            let data = {
                name: this.state.name,
                email: this.state.email,
                gender: this.state.gender,
                username: this.state.username,
                password: this.state.password1,
               // referral: this.state.referral || ''
            };
            console.log(data)
            await this.props.dispatch(register(data));
            alert('Berhasil daftar')
        }}
        

    

    render() {
        return (
            <View>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content"/>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack(null)}
                        style={{width: 50}}>
                        <Image style={styles.headIcon} source={require('../Assests/images/icon/ic_back.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.headTitle}>
                        Daftar
                    </Text>
                    <View style={{width: 50}}></View>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Daftar</Text>
                        <View style={styles.lineBar}>
                            <View style={styles.line}/>
                            <View style={{width: '40%'}}>
                                <Text style={styles.textFoot}>menggunakan</Text>
                            </View>
                            <View style={styles.line}/>
                        </View>
                        <View style={styles.optLoginBar}>
                            <TouchableOpacity style={styles.optLoginBtn}>
                                <Image style={{height: 23, width: 23, marginRight: 10,}}
                                       source={require('../Assests/images/icon/ic_facebook.png')}/>
                                <Text style={{color: '#000', fontSize: 17}}>
                                    Facebook
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optLoginBtn}>
                                <Image style={{height: 23, width: 23, marginRight: 10,}}
                                       source={require('../Assests/images/icon/ic_googleplus.png')}/>
                                <Text style={{color: '#000', fontSize: 17}}>
                                    Google
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.label}>NAMA LENGKAP</Text>
                        <TextInput
                            onChangeText={(name) => this.setState({name})}
                            style={styles.input}

                       />

                        <Text style={styles.label}>NO. HANDPHONE / E-MAIL</Text>
                        <TextInput
                            onChangeText={(email) => this.setState({email})}
                            style={styles.input}
                       />
                        <Text style={styles.label}>JENIS KELAMIN</Text>
                        <View style={styles.checkBar}>
                            <TouchableOpacity
                                style={[styles.checkBox, {
                                    borderColor: (this.state.gender == 'male') ? '#ff2742' : '#ddd'
                                }]}
                                onPress={() => this.setState({gender: 'male'})}
                            >
                                <Image style={styles.gender} source={require('../Assests/images/icon/ic_man.png')}/>
                                <Text style={{color: '#000', marginTop: 10}}>Laki-laki</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.checkBox, {
                                    borderColor: (this.state.gender == 'female') ? '#ff2742' : '#ddd'
                                }]}
                                onPress={() => this.setState({gender: 'female'})}
                            >
                                <Image style={styles.gender} source={require('../Assests/images/icon/ic_woman.png')}/>
                                <Text style={{color: '#000', marginTop: 10}}>Perempuan</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.label}>USERNAME</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(username) => this.setState({username})}
                       />
                        <Text style={styles.label}>PASSWORD BUKALAPAK</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={(password1) => this.setState({password1})}
                       />
                        <Text style={styles.label}>KETIK ULANG PASSWORD</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(password2) => this.setState({password2})}
                            secureTextEntry={true}
                       />
                        {/* <Text style={styles.label}>KODE REFERRAL (OPSIONAL)</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(referral) => this.setState({referral})}
                       /> */}
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <CheckBox
                                value={this.state.checked}
                               // onValueChange={() => this.setState({checked: !this.state.checked})}
                           />
                            <Text style={{marginTop: 5}}> Dengan mendaftar, Anda telah menyetujui aturan penggunaan dan
                                kebijakan privasi Bukalapak.com</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.postRegister()}
                            style={styles.btnLogin}>
                            <Text style={styles.btnTextLogin}>Daftar</Text>
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
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        height: 60,
    },
    headIcon: {
        width: 25,
        height: 25
    },
    headTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000'
    },
    title: {
        fontSize: 24,
        color: '#151515',
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
        marginBottom: 45
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
        marginBottom: 15,
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
    },
    checkBar: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    checkBox: {
        borderWidth: 1,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: 115,
        height: 100,
        marginRight: 10,
    },
    gender: {
        width: 30,
        height: 50,
    }
});

const mapsStageToProps = (state) => {
    return {
        users : state.users
    }
};

export default connect(mapsStageToProps)(FormRegister);
// export default FormRegister