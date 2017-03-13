import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View>
    <Header headerText='Albums'/>
    <AlbumList />
  </View>
);

//name of string must match project name
//must register at least one component
AppRegistry.registerComponent('albums', () => App);
