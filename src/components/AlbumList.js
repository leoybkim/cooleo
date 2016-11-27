import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class component
// Use class component instead of functional component when we need to fetch data
// Has Lifecycle methods ex) componentWillMount
class AlbumList extends Component {
  // initialize
  state = { albums: [] };

  // When component is about to be rendered to the screen, this method will run
  componentWillMount() {
    // HTTP request
    axios.get('https://tranquil-brushlands-49960.herokuapp.com/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  // renderAlbums() {
  //   return this.state.albums.map(album =>
  //     <Text key={album.title}>{album.title}</Text>
  //   );
  // }

  // use props to send album from parent (AlbumList) to child (Album) component
  // name of the props is arbitrary
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} p_album={album}/>
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
