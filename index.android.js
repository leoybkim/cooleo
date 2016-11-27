import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Functional component
// each JSX tag is considered as a return statement
// can't have more than one tag in the same top level as it will return after the first tag
// you can instead enclose multiple tag in a single outer parent tag
const App = () => (
  <View>
    <Header headerText={ 'cooleo' }/>
    <AlbumList />
  </View>
);

AppRegistry.registerComponent("cooleo", () => App);
