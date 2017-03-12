import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header/>
);

//name of string must match project name
//must register at least one component
AppRegistry.registerComponent('albums', () => App);
