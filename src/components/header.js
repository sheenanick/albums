import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#b2b2b2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 8,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
