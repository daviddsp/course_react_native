/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistList from './src/Artist/ArtistList'
import { getArtists } from './src/api-client'


export default class App extends Component {

  state = {
    artist: []
  }

  componentDidMount() {
    getArtists()
      .then(data => this.setState({ artist: data }))
  }



  render() {

    const artist = this.state.artist
    return (
      <View style={styles.container}>
        <ArtistList artist={artist}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  },
});
