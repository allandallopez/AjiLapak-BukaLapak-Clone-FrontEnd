import React, {Fragment} from 'react';
import {Text, View, ScrollView} from 'react-native';

import Header from './src/Components/Navigations/Header'
import SearchBar from './src/Components/Items/SearchBar'
import CardBukaMart from './src/Components/Items/CardBukaMart'
import CardSpesialUntukmu from './src/Components/Items/CardSpesialUntukmu'
import CardMenuFavorit from './src/Components/Items/CardMenuFavorit'
import CardMaudiGaransi from './src/Components/Items/CardMaudiGaransi'
import CardCategoryHome from './src/Components/Items/CardCategoryHome'
import Categories from './src/Screens/Categories'

const App = () => {
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
      <Categories/>
    </ScrollView>
  </View>
  );
};

export default App;
