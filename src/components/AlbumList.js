import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';


// Class component
// Use class component instead of functional component when we need to fetch data
// Has Lifecycle methods ex) componentWillMount
class AlbumList extends Component {
  // When component is about to be rendered to the screen, this method will run
  componentWillMount() {
    // HTTP request
    axios.get('https://tranquil-brushlands-49960.herokuapp.com/music_albums')
      .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
