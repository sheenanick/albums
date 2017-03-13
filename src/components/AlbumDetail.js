import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card'
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerContentStyle,
    headerTextStyle,
    albumImageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={albumImageStyle} source={{ uri: image }} />
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailContainerStyle: {
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerContentStyle: {
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 20
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail;
