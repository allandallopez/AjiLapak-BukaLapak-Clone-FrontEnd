import React, {Fragment} from 'react';
import {Text, View, ScrollView, Image, StyleSheet, AsyncStorage} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import rootReducers from './src/Public/Reducer/index'
import Rpm from 'redux-promise-middleware'
import {Provider} from 'react-redux'
import axios from 'axios'

// import Header from './src/Components/Navigations/Header'
// import SearchBar from './src/Components/Items/SearchBar'
// import CardBukaMart from './src/Components/Items/CardBukaMart'
// import CardSpesialUntukmu from './src/Components/Items/CardSpesialUntukmu'
// import CardMenuFavorit from './src/Components/Items/CardMenuFavorit'
// import CardMaudiGaransi from './src/Components/Items/CardMaudiGaransi'
// import CardCategoryHome from './src/Components/Items/CardCategoryHome'
// import Categories from './src/Screens/Categories'

import Home from './src/Screens/Home'
import Profile from './src/Screens/Profile'
// import BukaMall from './src/Screens/BukaMall'
import Account from './src/Screens/Account'
import CategoriesList from './src/Screens/CategoriesList'
import FormLogin from './src/Screens/FormLogin'
import FormRegister from './src/Screens/FormRegister'
import DetailProduct from './src/Screens/DetailProduct'
import EditProfile from './src/Screens/EditProfile'
import Checkout from './src/Screens/Checkout'
import Wishlist from './src/Screens/Wishlist'
import CartList from './src/Screens/CartList'
import AddProduct from './src/Screens/AddProduct'
import ForgotPassword from './src/Screens/ForgotPassword'
import VerifyOtp from './src/Screens/VerifyOtp'
import ResetPassword from './src/Screens/ResetPassword'
import SplashScreen from './src/Screens/SplashScreen'
import Transaction from './src/Screens/Transactions'
import History from './src/Screens/History'
import NotFoundPage from './src/Screens/NotFoundPage'
// import SplashScreen from './src/Screens/SplashScreen'

axios.defaults.baseURL = 'https://aji-lapak.herokuapp.com'

const styles = StyleSheet.create({
  icon: {
      width: 25,
      height: 25,
  }
});


const TopNav = createMaterialTopTabNavigator(
  {
    Tagihan: {
      screen: History,
      navigationOptions: {
          title: 'Tagihan',
      },
  },
    Pembelian: {
      screen: History,
      navigationOptions: {
          title: 'Pembelian',
      },
  },
    Penjualan: {
            screen: History,
            navigationOptions: {
                title: 'Penjualan',
                backgroundColor: 'red',
            },
        },
  },
  {
    initialRouteName: 'Tagihan',
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: '#263238',
      style: {
        backgroundColor: 'white',
      },
    },
  }
)

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
          title: 'Home',
          tabBarIcon: ({focused}) => (
              focused ?
                  <Image style={styles.icon}
                         source={require('./src/Assests/images/icon/Nav/ic_homenav_red.png')}/> :
                  <Image style={styles.icon} source={require('./src/Assests/images/icon/Nav/ic_homenav.png')}/>
          ),
          tabBarOptions: {
              activeTintColor: '#D71149',
              keyboardHidesTabBar: true,
          }
      }),
  },
    Favorit: {
      screen: Wishlist,
      navigationOptions: {
          title: 'Favorit',
          tabBarIcon: ({focused}) => (
              focused ?
                  <Image style={styles.icon}
                      source={require('./src/Assests/images/icon/Nav/ic_discover_nav_red.png')}/> :
                  <Image style={styles.icon}
                        source={require('./src/Assests/images/icon/Nav/ic_discover_nav.png')}/>
          ),
          tabBarOptions: {
              activeTintColor: '#D71149',
              keyboardHidesTabBar: true,
          }
      },
  },
    BukaMall: {
      screen: NotFoundPage,
      navigationOptions: {
          title: 'BukaMall',
          tabBarIcon: ({focused}) => (
              focused ?
                  <Image style={styles.icon}
                        source={require('./src/Assests/images/icon/Nav/ic_bukamall_nav_red.png')}/> :
                  <Image style={styles.icon}
                        source={require('./src/Assests/images/icon/Nav/ic_bukamall_nav.png')}/>
          ),
          tabBarOptions: {
              activeTintColor: '#D71149',
              keyboardHidesTabBar: true,
          }
      },
  },
    Transaction: {
      screen: TopNav,
      navigationOptions: {
          title: 'Transaction',
          tabBarIcon: ({focused}) => (
              focused ?
                  <Image style={styles.icon}
                        source={require('./src/Assests/images/icon/Nav/ic_trans_nav_red.png')}/> :
                  <Image style={styles.icon} source={require('./src/Assests/images/icon/Nav/ic_trans_nav.png')}/>
          ),
          tabBarOptions: {
              activeTintColor: '#D71149',
              keyboardHidesTabBar: true,
          }
      },
  },
    Account: {
            screen: Profile,
            navigationOptions: {
                title: 'Account',
               // tabBarVisible: false,
                tabBarIcon: ({focused}) => (
                    focused ?
                        <Image style={styles.icon}
                               source={require('./src/Assests/images/icon/Nav/ic_account_nav_red.png')}/> :
                        <Image style={styles.icon}
                               source={require('./src/Assests/images/icon/Nav/ic_account_nav.png')}/>
                ),
                tabBarOptions: {
                    activeTintColor: '#D71149',
                    keyboardHidesTabBar: true,
                },
            },
        },
  }
)

const Routes = createStackNavigator(
  {
    Main: {
      screen: MainNavigator,
    },
    CategoriesList,
   // Account,
    FormRegister,
    FormLogin,
    CartList,
    DetailProduct,
    Checkout,
    Wishlist,
    AddProduct,
    Profile,
    EditProfile,
    ForgotPassword,
    VerifyOtp,
    ResetPassword
   // Profile,
   // SplashScreen
  },
  {
    headerMode: 'none',
  }
)

const AuthNavigator = createSwitchNavigator(
  {
    App: Routes,
    SplashScreen,
   // CheckLogin,
   // SplashScreen,
  },
  {
    initialRouteName: 'SplashScreen'
  }
 // {s
)

const Navigation = createAppContainer(AuthNavigator)

const logger = createLogger();
const store = createStore(rootReducers, applyMiddleware(logger, Rpm));

const App = () => {
  return (
    <Provider store={store}>
      <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
        <Navigation/>
      </View>
    </Provider>
  );
};



export default App;
