import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: props.p_album.thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentSytle}>
          <Text style={styles.headerTextStyle}>{props.p_album.title}</Text>
          <Text>{props.p_album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: props.p_album.image }}
        />
      </CardSection>

      <CardSection>
        <Button buttonPress={() => Linking.openURL(props.p_album.url) }>
          Visit Website
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentSytle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
