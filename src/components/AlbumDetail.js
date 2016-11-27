import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.p_album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
